
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

        if (timeRemaining <= 9) {
            timerEl.setAttribute("style", "color:red");
        }
    }, 1000);
}

function beginQuiz() {
    questionEl.innerHTML = "I'm a question!";
    buttonsEl.innerHTML = "<button class=btn btnA>A</button><button class=btn btnB>B</button><button class=btn btnC>C</button><button class=btn btnD>D</button>"

}

Questions





//localStorage.setItem("high score".highScore)