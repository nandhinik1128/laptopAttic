const input = document.getElementById("text");
const dueTimeInput = document.getElementById("dueTime");

const allTasksDiv = document.getElementById("allTasks");
const pendingTasksDiv = document.getElementById("pendingTasks");
const completedTasksDiv = document.getElementById("completedTasks");
const expiredTasksDiv = document.getElementById("expiredTasks");
const deletedTasksDiv = document.getElementById("deletedTasks");

let tasks = [];

function add() {
    const text = input.value.trim();
    const dueTimeValue = dueTimeInput.value;

    if (!text) { alert("Please enter a task"); return; }
    if (!dueTimeValue) { alert("Please select a due date and time"); return; }

    const dueTime = new Date(dueTimeValue);
    if (dueTime <= new Date()) { alert("⏰ Please select a future time"); return; }

    const task = {
        text: text,
        dueTime: dueTime,
        status: "pending",   // pending | completed | expired | deleted
        prevStatus: null,    // used for undo delete
        element: null,
        completeBtn: null,
        deleteBtn: null
    };

    createTaskElement(task);
    tasks.push(task);

    input.value = "";
    dueTimeInput.value = "";
    input.focus();

    updateTasksDisplay();
}

function createTaskElement(task) {
    const box = document.createElement("div");
    box.className = "task-box";

    const spanText = document.createElement("span");
    const spanTime = document.createElement("span");
    box.appendChild(spanText);
    box.appendChild(spanTime);

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    box.appendChild(completeBtn);
    box.appendChild(deleteBtn);

    task.element = box;
    task.completeBtn = completeBtn;
    task.deleteBtn = deleteBtn;

    // Complete / Undo
    completeBtn.addEventListener("click", () => {
        if (task.status === "pending") task.status = "completed";
        else if (task.status === "completed") task.status = "pending";
        updateTasksDisplay();
    });

    // Delete / Undo handled in updateTasksDisplay
    deleteBtn.addEventListener("click", () => {
        task.prevStatus = task.status;
        task.status = "deleted";
        updateTasksDisplay();
    });
}

function updateTasksDisplay() {
    allTasksDiv.innerHTML = "";
    pendingTasksDiv.innerHTML = "";
    completedTasksDiv.innerHTML = "";
    expiredTasksDiv.innerHTML = "";
    deletedTasksDiv.innerHTML = "";

    const now = new Date();

    tasks.forEach(task => {
        const { element, text, dueTime, completeBtn, deleteBtn } = task;

        // Auto-expire pending tasks
        if (task.status === "pending" && dueTime <= now) {
            task.status = "expired";
        }

        const spanText = element.querySelector("span:nth-child(1)");
        const spanTime = element.querySelector("span:nth-child(2)");

        // Reset button visibility
        completeBtn.style.display = "inline-block";
        deleteBtn.style.display = "inline-block";

        // Update display based on status
        if (task.status === "expired") {
            spanText.textContent = "💀 " + text;
            spanTime.textContent = "⏰ Time's up!";
            completeBtn.style.display = "none";
            deleteBtn.style.display = "none";
        } else if (task.status === "completed") {
            spanText.textContent = "✅ " + text;
            const diffMs = dueTime - now;
            const hours = Math.floor(diffMs / (1000*60*60));
            const minutes = Math.floor((diffMs / (1000*60)) % 60);
            spanTime.textContent = `Due in ${hours}h ${minutes}m`;
            completeBtn.textContent = "Undo";
        } else if (task.status === "pending") {
            spanText.textContent = "🌟 " + text;
            const diffMs = dueTime - now;
            const hours = Math.floor(diffMs / (1000*60*60));
            const minutes = Math.floor((diffMs / (1000*60)) % 60);
            spanTime.textContent = `Due in ${hours}h ${minutes}m`;
            completeBtn.textContent = "Complete";
        } else if (task.status === "deleted") {
            spanText.textContent = "❌ " + text;
            const diffMs = dueTime - now;
            const hours = Math.floor(diffMs / (1000*60*60));
            const minutes = Math.floor((diffMs / (1000*60)) % 60);
            spanTime.textContent = `Due in ${hours}h ${minutes}m`;
            completeBtn.style.display = "none";
            deleteBtn.style.display = "none";

            // Add Undo button for deleted task
            let undoBtn = element.querySelector(".undo-btn");
            if (!undoBtn) {
                undoBtn = document.createElement("button");
                undoBtn.textContent = "Undo";
                undoBtn.className = "undo-btn";
                undoBtn.addEventListener("click", () => {
                    task.status = task.prevStatus;
                    task.prevStatus = null;
                    updateTasksDisplay();
                });
                element.appendChild(undoBtn);
            }
        }

        // Always append original element to All Tasks
        allTasksDiv.appendChild(element);

        // Append clones to filtered tabs (optional, you can just use original)
        if (task.status === "pending") pendingTasksDiv.appendChild(element.cloneNode(true));
        if (task.status === "completed") completedTasksDiv.appendChild(element.cloneNode(true));
        if (task.status === "expired") expiredTasksDiv.appendChild(element.cloneNode(true));
        if (task.status === "deleted") deletedTasksDiv.appendChild(element.cloneNode(true));
    });
}

function showSection(sectionId) {
    const sections = [allTasksDiv, pendingTasksDiv, completedTasksDiv, expiredTasksDiv, deletedTasksDiv];
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

// Auto-update countdown every minute
setInterval(updateTasksDisplay, 60000);
