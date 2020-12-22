

timeRemaining = 60
//function startQuiz()
//    beginTimer();
//  beginQuiz()


// Set Time
function beginTimer() {

    var timerInterval = setInterval(function () {
        timer.textContent = timeRemaining + " seconds left!";
        timeRemaining--;
        document.getElementById('timer').innerHTML = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timer.textContent = '---';
        }
    }, 1000);
}

beginButton.addEventLisener("click", beginTimer);

//localStorage.setItem("high score".highScore)