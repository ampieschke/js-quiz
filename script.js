
var begin = document.querySelector("#beginButton");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question")
var buttonsEl = document.querySelector("#buttonTown")


begin.addEventListener("click", startQuiz);
function startQuiz() {
    beginTimer();
    beginQuiz()
}

// Set Time
function beginTimer() {
    var timeRemaining = 60

    var timerInterval = setInterval(function () {
        timeRemaining--;
        timerEl.innerHTML = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timer.innerHTML = '---';
        }
    }, 1000);
}

function beginQuiz() {
    questionEl.innerHTML = "I'm a question!";
    buttonsEl.innerHTML = "<button class=btn>A</button><button class=btn>B</button><button class=btn>C</button><button class=btn>D</button>"

}



    // var questions = [
    //     { q: "The sky is blue.", a: "t" },
    //     { q: "There are 365 days in a year.", a: "t" },
    //     { q: "There are 42 ounces in a pound.", a: "f" },
    //     { q: "The Declaration of Independence was created in 1745.", a: "f" },
    //     { q: "Bananas are vegetables.", a: "f" }
    //   ];

    // for (var i = 0; i < questions.length; i++) {
    //     // Display current question to user and ask OK/Cancel
    //     var answer = confirm(questions[i].q);

    //     // Compare answers
    //     if ((answer === true && questions[i].a === "t") ||
    //       (answer === false && questions[i].a === "f")) {
    //       // Increase score
    //       score++;
    //       alert("Correct!");
    //     }
    //     else {
    //       alert("Wrong!");


//localStorage.setItem("high score".highScore)