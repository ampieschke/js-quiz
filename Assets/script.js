
var begin = document.querySelector("#beginButton");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var buttonAEl = document.querySelector("#btnA");
var buttonBEl = document.querySelector("#btnB");
var buttonCEl = document.querySelector("#btnC");
var buttonDEl = document.querySelector("#btnD");
var next = document.querySelector("#nextButton");
var progEl = document.querySelector("#progress");

//Quiz Vars
var shuffledQuestions
var questionIndex

//Timer Vars
var timerInterval
var timeRemaining = 60


//Begin Button Listener
begin.addEventListener("click", startQuiz);

//Answer Button Listeners
buttonAEl.addEventListener("click", () => {
    questionIndex++
    console.log(questionIndex);
    progEl.innerText = "progress: " + questionIndex + "/5";
    getQuestion()
})
buttonBEl.addEventListener("click", () => {
    questionIndex++
    progEl.innerText = "progress: " + questionIndex + "/5";
    getQuestion()
})
buttonCEl.addEventListener("click", () => {
    questionIndex++
    progEl.innerText = "progress: " + questionIndex + "/5";
    getQuestion()
})
buttonDEl.addEventListener("click", () => {
    questionIndex++
    progEl.innerText = "progress: " + questionIndex + "/5";
    getQuestion()
})


//Start Quiz
function startQuiz() {
    begin.classList.add("hiden");
    answersEl.classList.remove("hiden");
    beginTimer();
    beginQuiz()
    progEl.innerText = "progress: " + questionIndex + "/5";
}


// Timer Start
function beginTimer() {

    timerInterval = setInterval(function () {
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


// Timer Stop
function stopTimer() {
    clearInterval(timerInterval);
}


//Sort,Index, and Begin Asking Questions
function beginQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    getQuestion()
}


// Selects Questions in Sorted Order
function getQuestion() {
    readQuestion(shuffledQuestions[questionIndex])
}


// Selects Question and Proper Answers
function readQuestion(question) {
    if (questionIndex >= 5) {
        endGame();
    }
    questionEl.innerText = question.question
    buttonAEl.innerText = question.answers[0]
    buttonBEl.innerText = question.answers[1]
    buttonCEl.innerText = question.answers[2]
    buttonDEl.innerText = question.answers[3]
}


//End Game ToDos
function endGame() {
    stopTimer();
    questionEl.innerText = "Quiz Complete! Enter Your Initials to Enter the Hall of Fame!"
    answersEl.classList.add("hiden");
    timerEl.innerHTML = "YAY!";
    console.log(timeRemaining);
    localStorage.setItem("Time Remaining", JSON.stringify(timeRemaining));
}


//Quiz Taker Submission
// var quizTaker = {
// Initials: initialsInput.value.trim(),
// Score: timeRemaining

// };



// Questions
var questions = [
    {
        question: "What is JavaScript?",
        answers: [
            "A Dynamic Coding Language",
            "Anchient Egyption Archive",
            "Starbucks Drink",
            "An Acting Term",
        ],
    },
    {
        question: "Which of These is not a JavaScript Data Type?",
        answers: [
            "Array",
            "Boolean",
            "Texas",
            "Object",
        ]
    },
    {
        question: "3",
        answers: [
            "Array",
            "Boolean",
            "Texas",
            "Object",
        ]
    },
    {
        question: "4",
        answers: [
            "Array",
            "Boolean",
            "Texas",
            "Object",
        ]
    },
    {
        question: "5",
        answers: [
            "Array",
            "Boolean",
            "Texas",
            "Object",
        ]
    }
]