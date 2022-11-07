const targetDate = new Date('Jan 1,2023,00:00:00').getTime();

function count() {
    const currentDate = new Date().getTime();
    let gap = targetDate - currentDate;
    let second = 1000;
    let minute = second * 60
    let hour = minute * 60;
    let day = hour * 24;

    let dayLeft = Math.floor(gap / (day));
    let hourLeft = Math.floor((gap % (day)) / (hour));
    let minuteLeft = Math.floor((gap % (hour)) / (minute));
    let secondLeft = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = `${dayLeft} day`;
    document.getElementById('hour').innerText = `${hourLeft} hour`;
    document.getElementById('minute').innerText =`${minuteLeft} minute`;
    document.getElementById('second').innerText = `${secondLeft} second`;
}

setInterval(function () {
    count()
}, 1000);