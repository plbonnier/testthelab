const chrono = {
  minutes: 0,
  seconds: 0,
  tenthOfseconds: 0,
  init: () => {
    // cibler la l'element avec l'id chrono
    const parent = document.querySelector("#chrono");
    parent.style.display = "flex";
    parent.style.gap = "20px";
    parent.style.fontSize = "3rem";

    // créer un div minutes
    const elMin = document.createElement("div");
    elMin.classList.add("el-minutes");
    elMin.textContent = chrono.minutes;
    // créer un div seconds
    const elSeconds = document.createElement("div");
    elSeconds.classList.add("el-seconds");
    elSeconds.textContent = chrono.seconds;
    // créer un div tenthOfseconds
    const elTenthOfseconds = document.createElement("div");
    elTenthOfseconds.classList.add("el-tenthOfseconds");
    elTenthOfseconds.textContent = chrono.tenthOfseconds;
    parent.appendChild(elMin);
    parent.appendChild(elSeconds);
    parent.appendChild(elTenthOfseconds);

    chrono.start();
  },
  display: () => {
    document.querySelector(".el-minutes").textContent = chrono.minutes;
    document.querySelector(".el-seconds").textContent = chrono.seconds;
    document.querySelector(".el-tenthOfseconds").textContent =
      chrono.tenthOfseconds;
  },
  changeTheTime: () => {
    chrono.tenthOfseconds++;
    if (chrono.tenthOfseconds > 10) {
      chrono.seconds++;
      chrono.tenthOfseconds = 0;
    }
    if (chrono.seconds >= 60) {
      chrono.minutes++;
      chrono.seconds = 0;
    }
    chrono.display();
  },

  start: () => {
    setInterval(chrono.changeTheTime, 100);
  },
};

chrono.init();
