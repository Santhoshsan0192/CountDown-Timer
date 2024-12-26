function updateCurrentTime() {
    const now = new Date();
    const date = now.getDate();
    const month = now.toLocaleString('en-US', { month:"short" });
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById('date').textContent = date;
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}
setInterval(updateCurrentTime, 1000);
updateCurrentTime();
