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

    function startConfettiAnimation() {
        const colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];
        const shapes = ["circle", "square", "triangle"];

        const duration = 15 * 1000,
            animationEnd = Date.now() + duration,
            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                clearInterval(interval);
                startConfettiAnimation(); // Restart the confetti animation
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
                        }
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
                        }
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

    // Call the startConfettiAnimation() function when the countdown reaches zero
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'It\'s your birthday! 🎉';

        // Start the confetti animation
        startConfettiAnimation();
    }
}, 1000);