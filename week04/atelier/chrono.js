const chrono = {
    isRunning: false,
    minutes: 0,
    secondes: 0,
    tenthOfSecondes: 0,
    init: function () {
        const body = document.body;

        const div = document.createElement("div");
        div.classList.add("minutes");
        const div2 = document.createElement("div");
        div2.classList.add("secondes");
        const div3 = document.createElement("div");
        div3.classList.add("tenthOfSecondes");
        const button = document.createElement("button");
        button.classList.add("button");


        body.style.display = "flex";
        body.style.justifyContent = "start";

        div.style.backgroundColor = "green";
        div.style.borderBox = "solid 1px black";
        div.style.width = "8rem";
        div.style.heigth = "8rem";
        div.style.color = "white";
        div.style.textAlign = "center";
        div2.style.backgroundColor = "blue";
        div2.style.borderBox = "solid 1px black";
        div2.style.width = "8rem";
        div2.style.heigth = "8rem";
        div2.style.color = "white";
        div2.style.textAlign = "center";
        div3.style.backgroundColor = "yellow";
        div3.style.borderBox = "solid 1px black";
        div3.style.width = "8rem";
        div3.style.heigth = "8rem";
        div3.style.color = "white";
        div3.style.textAlign = "center";
        button.textContent = "Start";
        

        body.appendChild(div);
        body.appendChild(div2);
        body.appendChild(div3);
        body.appendChild(button);
    },

    display: function () {
        const minutes = document.querySelector(".minutes");
        const secondes = document.querySelector(".secondes");
        const tenthOfSecondes = document.querySelector(".tenthOfSecondes");
        minutes.textContent = chrono.minutes;
        secondes.textContent = chrono.secondes;
        tenthOfSecondes.textContent = chrono.tenthOfSecondes;
    },

    changeTheTime: function () {
        chrono.tenthOfSecondes++;
        if (chrono.tenthOfSecondes >= 10) {
            chrono.tenthOfSecondes = 0;
            chrono.secondes++;
            if (chrono.secondes >= 60) {
                chrono.secondes = 0;
                chrono.minutes++;
            }
        }
        chrono.display();
    },
    
    start: function () {
        console.log("start");
        if (!chrono.isRunning) {
            setInterval(chrono.changeTheTime, 100);
            chrono.isRunning = true;
        } else {
            clearInterval();
            chrono.isRunning = false;
        }
console.log(chrono.isRunning)
    },

};

chrono.init();
// chrono.display();
const button2 = document.querySelector(".button");
    button2.addEventListener("click", chrono.start);
