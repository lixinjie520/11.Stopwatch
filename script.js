const playBtn = document.querySelector(".fa-play");
const stopBtn = document.querySelector(".fa-stop");
const resetBtn = document.querySelector(".fa-rotate-left");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
let timer;
let s = (m = h = 0);
let isRunning = false;
playBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
  }
});

function stopwatch() {
  s++;
  if (s == 60) {
    s = 0;
    m++;
    if (m == 60) {
      m = 0;
      h++;
    }
  }
  updateDisplay(); //以下內容用函式封裝
  //   let formattedSeconds = s < 10 ? "0" + s : s;
  //   let formattedMinutes = m < 10 ? "0" + m : m;
  //   let formattedHours = h < 10 ? "0" + h : h;
  // seconds.innerHTML = formattedSeconds;
  // minutes.innerHTML = formattedMinutes;
  // hours.innerHTML = formattedHours;
}
function updateDisplay() {
  seconds.innerHTML = s.toString().padStart(2, "0");
  minutes.innerHTML = m.toString().padStart(2, "0");
  hours.innerHTML = h.toString().padStart(2, "0");
}
stopBtn.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    isRunning = false;
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  //   s = 0;
  //   m = 0;
  //   h = 0; 這個可以這樣寫：
  s = m = h = 0;
  updateDisplay();
  //   seconds.innerHTML = "00";
  //   minutes.innerHTML = "00";
  //   hours.innerHTML = "00";
});
