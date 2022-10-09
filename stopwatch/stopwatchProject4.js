firstButton = document.getElementsByTagName('i')[0];
secondButton = document.getElementsByTagName('i')[1];
var seconds = 0;
var mins = 0;
var hours = 0;
var timerRunning = false;
var timeInterval;
firstButton.addEventListener("click", function () {
  if (timerRunning == false) {
    timeInterval = window.setInterval(stopwatch, 1000);
    timerRunning = true;
  }
  else {
    window.clearInterval(timeInterval);
    timerRunning = false;
  }

  firstButton.classList.toggle('fa-play');
  firstButton.classList.toggle('fa-pause');
})

function stopwatch() {
  ++seconds;
  if (seconds == 60) {
    ++mins;
    seconds = 0;
  }
  if (mins == 60) {
    ++hours;
    mins = 0;
  }
  if (seconds < 10)
    displaySeconds = "0" + seconds;
  else
    displaySeconds = seconds;
  if (mins < 10)
    displayMins = "0" + mins;
  else
    displayMins = mins;
  if (hours < 10)
    displayHours = "0" + hours;
  else
    displayHours = hours;
  document.getElementsByClassName("timer")[0].innerText = displayHours + ":" + displayMins + ":" + displaySeconds;
  console.log(seconds + "-" + mins + "-" + hours)
}

secondButton.addEventListener("click", function () {
  seconds = mins = hours = 0;
  window.clearInterval(timeInterval);
  timerRunning = false;
  if (firstButton.classList.contains('fa-pause')) {
    firstButton.classList.toggle('fa-pause');
    firstButton.classList.toggle('fa-play');
  }
  document.getElementsByClassName("timer")[0].innerText = "00:00:00";
})
