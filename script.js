function syncTimeWithServer() {
    // Create an AJAX request to fetch the current time from an NTP server
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://worldtimeapi.org/api/ip', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const serverTime = new Date(response.datetime).getTime();

            // Calculate the time difference between the server time and the local time
            const timeDifference = serverTime - Date.now();

            // Update the target date by adding the time difference
            targetDate.setTime(targetDate.getTime() + timeDifference);
        }
    };
    xhr.send();
}

// Target date (your birthday)
const targetDate = new Date('July 9, 2023 01:45:00');

// Sync the time with the server
syncTimeWithServer();

// Update the countdown every second
const countdown = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = targetDate.getTime() - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown on the webpage
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Update singular/plural words
    document.getElementById('days-text').textContent = days === 1 ? 'day' : 'days';
    document.getElementById('hours-text').textContent = hours === 1 ? 'hour' : 'hours';
    document.getElementById('minutes-text').textContent = minutes === 1 ? 'minute' : 'minutes';
    document.getElementById('seconds-text').textContent = seconds === 1 ? 'second' : 'seconds';

    // Check if the countdown has reached the target date
    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').textContent = 'It\'s your birthday! 🎉';
        startConfettiAnimation();
    }
}, 1000);

function startConfettiAnimation() {
    const colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];
    const shapes = ["circle", "square", "triangle"];

    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
            startConfettiAnimation();
            return;
        }

        confetti(
            Object.assign({}, defaults, {
                particleCount: 4,
                shapes: shapes,
                colors: colors,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );

        confetti(
            Object.assign({}, defaults, {
                particleCount: 4,
                scalar: 1.8,
                shapes: ["text"],
                shapeOptions: {
                    text: {
                        value: ["🎂", "🎉", "🎈", "🎁", "🎊", "🍰", "🎇", "🥳", "🎵", "🎶"],
                    },
                },
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );

        confetti(
            Object.assign({}, defaults, {
                particleCount: 4,
                scalar: 1.8,
                shapes: ["text"],
                shapeOptions: {
                    text: {
                        value: ["🎂", "🎉", "🎈", "🎁", "🎊", "🍰", "🎇", "🥳", "🎵", "🎶"],
                    },
                },
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );

        confetti(
            Object.assign({}, defaults, {
                particleCount: 4,
                shapes: shapes,
                colors: colors,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}

const fullscreenButton = document.getElementById('fullscreenButton');
const maximizeIcon = document.getElementById('maximizeIcon');

function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // Enter full-screen mode
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
        // Change the source of the maximize icon to the minimize icon image
        maximizeIcon.src = 'resources/svg/icon/minimize.svg';
    } else {
        // Exit full-screen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        // Change the source of the maximize icon back to the original maximize icon image
        maximizeIcon.src = 'resources/svg/icon/maximize.svg';
    }
}

fullscreenButton.addEventListener('click', toggleFullScreen);
