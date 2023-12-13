//description: This file contains functions that are responsible for timer functionality

// function that Initializes timer counting the seconds user have left to draw
export function initTimer(callback) {
    const counter = document.querySelector("#counter");
    let secondsLeftToDraw = 30;
    counter.textContent = secondsLeftToDraw;

    function startTimer() {
        counter.textContent = secondsLeftToDraw;

        if (secondsLeftToDraw === 0) {
            counter.textContent = "Time's up!";
            callback();
        } else {
            secondsLeftToDraw -= 1;
            setTimeout(startTimer, 1000);
        }
    }
    startTimer();
}
