
var begin = document.querySelector("#beginButton");
var restart = document.querySelector("#restartButton");
var timerEl = document.querySelector("#timer");
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var buttonAEl = document.querySelector("#btnA");
var buttonBEl = document.querySelector("#btnB");
var buttonCEl = document.querySelector("#btnC");
var buttonDEl = document.querySelector("#btnD");
var hofEnterEl = document.querySelector("#hof");
var hofButton = document.querySelector("#hofB");
var hofListEl = document.querySelector("#hofList");
var next = document.querySelector("#nextButton");
var progEl = document.querySelector("#progress");
var initialsInput = document.querySelector("#user-Initials-input");
var userInitialsSpan = document.querySelector("#user-initials");
var userScoreSpan = document.querySelector("#user-score");


//Quiz Vars
var shuffledQuestions
var questionIndex
var userAnswer
var lastUser
var correct


//Timer Vars
var timerInterval
var timeRemaining


//Hall of Fame Vars
var hof = [];

//Begin Button Listener
begin.addEventListener("click", startQuiz);


//Start Quiz
function startQuiz() {
    begin.classList.add("hiden");
    answersEl.classList.remove("hiden");
    beginTimer();
    beginQuiz();
    progEl.innerText = "progress: " + questionIndex + "/5";
}


// Timer Start
function beginTimer() {
    timeRemaining = 60;
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


//Timer Decuct
function deductTime() {
    timeRemaining = timeRemaining - 5;
}


// Timer Stop
function stopTimer() {
    clearInterval(timerInterval);
}

//Answer Button Listeners
buttonAEl.addEventListener("click", () => {
    userAnswer = buttonAEl.innerText;
    if (userAnswer !== correct) {
        deductTime();
    };
    console.log(questionIndex);
    console.log(userAnswer);
    console.log(correct);
    questionIndex++;
    progEl.innerText = "progress: " + questionIndex + "/5";
    getQuestion()
})
buttonBEl.addEventListener("click", () => {
    userAnswer = buttonBEl.innerText;
    if (userAnswer !== correct) {
        deductTime();
    };
    console.log(questionIndex);
    console.log(userAnswer);
    console.log(correct);
    questionIndex++;
    progEl.innerText = "progress: " + questionIndex + "/5";
    getQuestion()
})
buttonCEl.addEventListener("click", () => {
    userAnswer = buttonCEl.innerText;
    if (userAnswer !== correct) {
        deductTime();
    };
    console.log(questionIndex);
    console.log(userAnswer);
    console.log(correct);
    questionIndex++
    progEl.innerText = "progress: " + questionIndex + "/5";
    getQuestion()
})
buttonDEl.addEventListener("click", () => {
    userAnswer = buttonDEl.innerText;
    if (userAnswer !== correct) {
        deductTime();
    };
    console.log(questionIndex);
    console.log(userAnswer);
    console.log(correct);
    questionIndex++;
    progEl.innerText = "progress: " + questionIndex + "/5";
    getQuestion()
})


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
        return;
    }
    questionEl.innerText = question.question
    buttonAEl.innerText = question.answers[0]
    buttonBEl.innerText = question.answers[1]
    buttonCEl.innerText = question.answers[2]
    buttonDEl.innerText = question.answers[3]
    correct = question.correctAnswer
}


//End Game ToDos
function endGame() {
    stopTimer();
    questionEl.innerText = "Quiz Complete! Enter Your Initials to Enter the Hall of Fame!"
    answersEl.classList.add("hiden");
    timerEl.innerHTML = "YAY!";
    console.log(timeRemaining);
    hofEnterEl.classList.remove("hiden");
}


//Create user Object from Submission and Add to HOF Array
hofButton.addEventListener("click", function (event) {
    event.preventDefault();
    hofEnterEl.classList.add("hiden");
    hofListEl.classList.remove("hiden");

    var user = {
        initials: initialsInput.value.trim(),
        score: timeRemaining
    };

    console.log(user)
    hof.push(user)
    console.log(hof)
    localStorage.setItem("user", JSON.stringify(user))
    runHof();
}
);


//Show HOF
function runHof() {
    quizEl.classList.add("hiden");
    lastUser = JSON.parse(localStorage.getItem("user"));
    userScoreSpan.append(lastUser.score);
    userInitialsSpan.append(lastUser.initials);
}


//Restart Method
restart.addEventListener("click", restartQuiz);
function restartQuiz() {
    quizEl.classList.remove("hiden");
    answersEl.classList.remove("hiden");
    hofListEl.classList.add("hiden");
    beginTimer();
    beginQuiz();
    progEl.innerText = "progress: " + questionIndex + "/5";
}


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
        correctAnswer: "A Dynamic Coding Language"
    },
    {
        question: "Which of These is not a JavaScript Data Type?",
        answers: [
            "Array",
            "Boolean",
            "Texas",
            "Object",
        ],
        correctAnswer: "Texas"
    },
    {
        question: "Where should the JavaScript tag go?",
        answers: [
            "The body",
            "The Header",
            "Inside your .css file",
            "Both the body or header is correct",
        ],
        correctAnswer: "Both the body or header is correct"
    },
    {
        question: "What is the proper way to enclose an array?",
        answers: [
            "[]",
            "()",
            "{ }",
            "//",
        ],
        correctAnswer: "[]"
    },
    {
        question: "What CAN'T JavaScript do?",
        answers: [
            "This homework assignment",
            "Add to the HTML",
            "Crush my soul",
            "It can do all these things",
        ],
        correctAnswer: "It can do all these things"
    }
]