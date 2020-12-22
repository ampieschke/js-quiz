
const begin = document.querySelector("#beginButton");
const timerEl = document.querySelector("#timer");
const questionEl = document.querySelector("#question")
const answersEl = document.querySelector("#answers")
const buttonAEl = document.querySelector("#btnA")
const buttonBEl = document.querySelector("#btnB")
const buttonCEl = document.querySelector("#btnC")
const buttonDEl = document.querySelector("#btnD")
const next = document.querySelector("#nextButton");
var shuffledQuestions, currentQuestionIndex

//Event Listeners
begin.addEventListener("click", startQuiz);
// next.addEventListener("click", () => {
//     currentQuestionIndex++
//     getNextQuestion()
// })


//Start Quiz
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
    shuffledQuestions = questions.sort()
    questionIndex = 0
    getQuestion()
}

function getQuestion() {
    readQuestion(shuffledQuestions[questionIndex])
}

function readQuestion(question) {
    questionEl.innerText = question.question
    buttonAEl.innerText = question.answers.text1
    buttonBEl.innerText = question.answers.text
    buttonCEl.innerText = question.text3
    buttonDEl.innerText = answers.text4
}

var questions = [
    {
        question: "What is JavaScript?",
        answers: [
            { text1: "A Dynamic Coding Language" },
            { text2: "An Anchient Egyption Archive System" },
            { text3: "Starbucks Drink" },
            { text4: "Acting Term" },
        ],

        question: "Which of These is not a JavaScript Data Type?",
        answers: [
            { text1: "Array" },
            { text2: "Boolean" },
            { text3: "Texas" },
            { text4: "Object" },
        ]

    }

]







//localStorage.setItem("high score".highScore)