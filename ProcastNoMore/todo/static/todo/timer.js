// pomodoro.js
document.addEventListener('DOMContentLoaded', function() {
  let timerDisplay = document.getElementById('timer-display');
  let startStopButton = document.getElementById('start-stop');
  let timerDuration = 0;
  let timer;
  let isRunning = false;

  // Set timer duration
  document.querySelectorAll('.time-setter').forEach(button => {
      button.addEventListener('click', function() {
          timerDuration = this.getAttribute('data-time') * 60;
          updateDisplay(timerDuration);
      });
  });

  // Start/Stop button
  startStopButton.addEventListener('click', function() {
      if (isRunning) {
          stopTimer();
      } else {
          startTimer();
      }
  });

  function startTimer() {
      if (timerDuration <= 0) return;

      isRunning = true;
      startStopButton.textContent = 'Stop';
      timer = setInterval(function() {
          timerDuration--;
          updateDisplay(timerDuration);
          if (timerDuration <= 0) {
              stopTimer();
              alert("Time's up!");
          }
      }, 1000);
  }

  function stopTimer() {
      clearInterval(timer);
      isRunning = false;
      startStopButton.textContent = 'Start';
  }

  function updateDisplay(seconds) {
      let minutes = Math.floor(seconds / 60);
      let remainingSeconds = seconds % 60;
      timerDisplay.textContent = `${pad(minutes)}:${pad(remainingSeconds)}`;
  }

  function pad(number) {
      return number < 10 ? '0' + number : number;
  }
});
