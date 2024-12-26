let countdownInterval;
function startCountdown() {
    const yearsInput = parseInt(document.getElementById("years").value) || 0;
    const daysInput = parseInt(document.getElementById("days").value) || 0;
    const hoursInput = parseInt(document.getElementById("hours").value) || 0;
    const minutesInput = parseInt(document.getElementById("minutes").value) || 0;
    const secondsInput = parseInt(document.getElementById("seconds").value) || 0;
    const now = new Date();
    const targetDate = new Date(
        now.getFullYear() + yearsInput,
        now.getMonth(),
        now.getDate() + daysInput,
        now.getHours() + hoursInput,
        now.getMinutes() + minutesInput,
        now.getSeconds() + secondsInput
    );
    clearInterval(countdownInterval);
    updateCountdown(targetDate);
    countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
}
function updateCountdown(targetDate) {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").textContent = "00:00:00:00:00";
        alert("Countdown Finished!");
        return;
    }
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById("countdown").textContent =
        `${formatTime(years)}:${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}
function stopCountdown() {
    clearInterval(countdownInterval);
}
function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("countdown").textContent = "00:00:00:00:00";
    document.getElementById("years").value = "0";
    document.getElementById("days").value = "0";
    document.getElementById("hours").value = "0";
    document.getElementById("minutes").value = "0";
    document.getElementById("seconds").value = "0";
}
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}
