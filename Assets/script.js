
const begin = document.querySelector("#beginButton");
const timerEl = document.querySelector("#timer");
const questionEl = document.querySelector("#question")
const answersEl = document.querySelector("#answers")
const next = document.querySelector("#nextButton");
var shuffledQuestions, currentQuestionIndex

begin.addEventListener("click", startQuiz);
next.addEventListener("click", () => {
    currentQuestionIndex++
    getNextQuestion()
})

function startQuiz() {
    begin.classList.add("hiden");
    answersEl.classList.remove("hiden");
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
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    getQuestion()
}

function getQuestion() {
    readQuestion(shuffledQuestions[questionIndex])
}

function readQuestion(question) {
    questionEl.innerText = question.question

}

var questions = [
    {
        question: "What is JavaScript?",
        answers: [
            { text: "A Dynamic Coding Language", correct: true },
            { text: "An Anchient Egyption Archive System", correct: false },
            { text: "Starbucks Drink", correct: false },
            { text: "Acting Term", correct: false },
        ],

        question: "Which of These is not a JavaScript Data Type?",
        answers: [
            { text: "Array", correct: false },
            { text: "Boolean", correct: false },
            { text: "Texas", correct: true },
            { text: "Object", correct: false },
        ]

    }

]







//localStorage.setItem("high score".highScore)