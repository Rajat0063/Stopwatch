var seconds = 0o0;
var tens = 0o0;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval; // to store timer values

// this function will run when click on start

function startTimer() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

buttonStart.onclick = function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
};