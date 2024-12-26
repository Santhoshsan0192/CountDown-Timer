let hours = 0, minutes = 0, seconds = 0;
let timerInterval;
let isRunning = false;
function updateTimeDisplay() {
    const display = document.getElementById('time-display');
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateTimeDisplay();
        }, 10);
    }
}
function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}
function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimeDisplay();
}
document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
updateTimeDisplay();
