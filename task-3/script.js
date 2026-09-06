// Selecting the input display
let input = document.getElementById("input");

// Selecting all number and operator buttons
let buttons = document.querySelectorAll("button");

// Looping through all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        // AC (All Clear) - clear full input
        if (value === "AC") {
            input.value = "";
        }
        // C (Clear last character)
        else if (value === "C") {
            input.value = input.value.slice(0, -1);
        }
        // = (Evaluate expression)
        else if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        }
        // Append clicked value to input
        else {
            input.value += value;
        }
    });
});
