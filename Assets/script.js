
const begin = document.querySelector("#beginButton");
const timerEl = document.querySelector("#timer");
const questionEl = document.querySelector("#question")
const answers = document.querySelector("#answers")


begin.addEventListener("click", startQuiz);
function startQuiz() {
    begin.classList.add("hiden");
    answers.classList.remove("hiden");
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
    //   buttonsEl.setAttribute("style, display:show")
}
// function getQuestion() {
//     var questions = [a, b, c];
//     var questionOrder = shuffle(questions);
//     console.log(questionOrder);

//}

// function setNextQuestion() {

// }

// function selectAnswer() {

// }







//localStorage.setItem("high score".highScore)