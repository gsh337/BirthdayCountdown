// Set the date of your birthday
var birthday = new Date('July 9, 2023 00:00:00').getTime();

// Update the countdown every second
var countdown = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining
    var distance = birthday - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format the units
    var daysUnit = (days === 1) ? 'day' : 'days';
    var hoursUnit = (hours === 1) ? 'hour' : 'hours';
    var minutesUnit = (minutes === 1) ? 'minute' : 'minutes';
    var secondsUnit = (seconds === 1) ? 'second' : 'seconds';

    // Display the countdown
    var countdownText = days + ' ' + daysUnit + ', ' + hours + ' ' + hoursUnit + ', ' + minutes + ' ' + minutesUnit + ', ' + seconds + ' ' + secondsUnit;
    document.getElementById('countdown').innerHTML = countdownText;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'It\'s your birthday! 🎉';
    }
}, 1000);