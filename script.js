var birthday = new Date('July 9, 2023 00:00:00').getTime();

var countdown = setInterval(function () {
    var now = new Date().getTime();

    var distance = birthday - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var daysUnit = (days === 1) ? 'day' : 'days';
    var hoursUnit = (hours === 1) ? 'hour' : 'hours';
    var minutesUnit = (minutes === 1) ? 'minute' : 'minutes';
    var secondsUnit = (seconds === 1) ? 'second' : 'seconds';

    var countdownText = days + ' ' + daysUnit + ', ' + hours + ' ' + hoursUnit + ', ' + minutes + ' ' + minutesUnit + ', ' + seconds + ' ' + secondsUnit;
    document.getElementById('countdown').innerHTML = countdownText;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'It\'s your birthday! 🎉';
        document.getElementById('birthdayQuote').innerHTML = randomQuote;
    }
}, 1000);