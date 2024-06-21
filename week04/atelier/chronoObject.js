const chrono = {
    minutes: 0,
    seconds: 0,
    tenthOfSeconds: 0,
    isRunning: false,

    init: () => {
        chrono.displayMinutes = document.querySelector(".minutes");
        chrono.displaySeconds = document.querySelector(".seconds");
        chrono.displayTenthOfSeconds = document.querySelector(".tenthOfSeconds");
        chrono.stopIntervalId;
        chrono.btnStart = document.querySelector("#start");
        chrono.btnStart.addEventListener('click', function () {
            // console.log('%cscript\chronoObject.js:22 chrono.isRunning', 'color: #007acc;', chrono.isRunning);
            if (chrono.isRunning === false) {
                chrono.btnStart.textContent = "Stop";
                chrono.btnStart.style.backgroundColor = "red";
                chrono.isRunning = true;
                chrono.start();
            }
            else {
                clearInterval(chrono.stopIntervalId);
                chrono.btnStart.textContent = "Start";
                chrono.btnStart.style.backgroundColor = "green";
                chrono.isRunning = false;
            }

        });

        chrono.btnReset = document.querySelector("#reset");

        chrono.btnReset.addEventListener('click', function () {
            console.log('%cscript\chronoObject.js:60 reset', 'color: #007acc;', "reset");
            clearInterval(chrono.stopIntervalId);
            chrono.btnStart.textContent = "Start";
            chrono.btnStart.style.backgroundColor = "green";
            chrono.isRunning = false;
            chrono.minutes = chrono.seconds = chrono.tenthOfSeconds = 0;
            chrono.display();
        });
    },

    display: () => {
        chrono.displayMinutes.innerHTML = chrono.minutes;
        chrono.displaySeconds.innerHTML = chrono.seconds;
        chrono.displayTenthOfSeconds.innerHTML = chrono.tenthOfSeconds;
    },

    changeTheTime: () => {
        chrono.tenthOfSeconds++;
        if (chrono.tenthOfSeconds > 9) {
            chrono.seconds++;
            chrono.tenthOfSeconds = 0;

        }
        if (chrono.seconds > 59) {
            chrono.minutes++;
            chrono.seconds = 0;
        }
        chrono.display();
    },

    start: () => {
        console.log("Start chrono");
        chrono.stopIntervalId = setInterval(chrono.changeTheTime, 100);
    },

};

chrono.init();
chrono.display();