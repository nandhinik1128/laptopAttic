// All questions stored here
const allQuestions = [
  { 
    q: "What is 2 + 2?", 
    options: ["3", "4", "5", "6"], 
    answer: "4" 
  },
  { 
    q: "Who is the Father of the Nation (India)?", 
    options: ["Mahatma Gandhi", "Nehru", "Ambedkar", "Subhash Bose"], 
    answer: "Mahatma Gandhi" 
  },
  { 
    q: "What is H2O commonly known as?", 
    options: ["Oxygen", "Hydrogen", "Water", "Salt"], 
    answer: "Water" 
  },
  { 
    q: "Which is the largest continent?", 
    options: ["Asia", "Africa", "Europe", "Australia"], 
    answer: "Asia" 
  },
  { 
    q: "Where is the Lord’s Cricket Ground located?", 
    options: ["Delhi", "Mumbai", "London", "Sydney"], 
    answer: "Lord’s, London" 
  },
  { 
    q: "Who is called the God of Cricket?", 
    options: ["Kohli", "Dhoni", "Sachin Tendulkar", "Rohit"], 
    answer: "Sachin Tendulkar" 
  },
  { 
    q: "Who is known as the Turbanator?", 
    options: ["Kapil Dev", "Harbhajan Singh", "Yuvraj", "Sehwag"], 
    answer: "Yuvraj" 
  }
];

//  Student object
let student = {};
let selectedQuestions = [];  // will hold the 3 random ques

// Registration
function reg(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    if(!name || !email || !age){
        alert("Please fill the required fields");
        return;
    }
    if(age < 12) {
        alert("Age must be at least 12 or above");
        return;
    }

    student.name = name; 
    student.email = email;
    student.age = age;

    // Hide registration, show quiz
    document.getElementById("Registration").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    // Start quiz with random 3 questions
    startQuiz();
}

// Show 3 random questions
function startQuiz() {
    // Pick 3 random questions
    selectedQuestions = allQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    let quizDiv = document.getElementById("quiz");
    

    selectedQuestions.forEach((qObj, index) => {
        let qHTML = `<p>${index+1}. ${qObj.q}</p>`;
        qObj.options.forEach(opt => {
            qHTML += `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`;
        });
        quizDiv.innerHTML += qHTML + "<br>";
    });

    // moving submit button to the bottom
     let submitButton = document.getElementById("submit");
    quizDiv.appendChild(submitButton);
   
}

// Submit with Promise + delay
function submit() {
    let selectedAnswers = [];

    // Collect answers BEFORE clearing the quiz div
    selectedQuestions.forEach((qObj, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        selectedAnswers.push(selected ? selected.value : "");
    });

    // show temporary "processing"
    let quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "<p>Calculating your score... </p>";

    // Promise to simulate delay
    new Promise((resolve) => {
        setTimeout(() => {
            let score = 0;

            // Use the saved answers instead of querying DOM
            selectedAnswers.forEach((ans, i) => {
                if (ans.trim() === selectedQuestions[i].answer.trim().toLowerCase()) {
                    score++;
                }
            });

            resolve(score);
        }, 2000); // wait 2 seconds
    }).then((score) => {
        let percentage = (score / selectedQuestions.length) * 100;

        let grade = "";
        if (percentage >= 90) grade = "A";
        else if (percentage >= 75) grade = "B";
        else if (percentage >= 50) grade = "C";
        else grade = "D";

        let timestamp = new Date();

        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";

        document.getElementById("score").innerText = score + " / " + selectedQuestions.length;
        document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";
        document.getElementById("grade").innerText = grade;
        document.getElementById("timespan").innerText = timestamp.toLocaleString();

        student.score = score;
        student.grade = grade;
    });
}



// Show student JSON
function showJSON() {
    document.getElementById("json").innerText =
        JSON.stringify(student,null, 2);
}
