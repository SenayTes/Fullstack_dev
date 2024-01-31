// When the DOM is fully loaded, execute the provided function
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the timer display element
    let timerDisplay = document.getElementById('timer-display');
    // Get reference to the start/stop button
    let startStopButton = document.getElementById('start-stop');
    // Get reference to the reset button
    let resetButton = document.getElementById('reset');
    // Initialize timer duration to 0 seconds
    let timerDuration = 0;
    // Variable to store the timer interval reference
    let timer;
    // Boolean flag to track whether the timer is running
    let isRunning = false;
  
    // Set timer duration based on the clicked button's data-time attribute
    document.querySelectorAll('.time-setter').forEach(button => {
        button.addEventListener('click', function() {
            // Convert the data-time attribute to seconds and update timerDuration
            timerDuration = this.getAttribute('data-time') * 60;
            // Update the displayed time
            updateDisplay(timerDuration);
        });
    });
  
    // Event listener for the start/stop button
    startStopButton.addEventListener('click', function() {
        // If the timer is running, stop it; otherwise, start it
        if (isRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    });
  
    // Event listener for the reset button
    resetButton.addEventListener('click', function() {
          // Reset the timer
          resetTimer();
    });
  
    // Function to start the timer
    function startTimer() {
        // Check if the timer duration is greater than 0
        if (timerDuration <= 0) return;
  
        // Set the flag indicating that the timer is running
        isRunning = true;
        // Change the button text to 'Stop'
        startStopButton.textContent = 'Stop';
  
        // Set up an interval to update the timer every second
        timer = setInterval(function() {
            // Decrease the timer duration by 1 second
            timerDuration--;
            // Update the displayed time
            updateDisplay(timerDuration);
  
            // If the timer reaches 0, stop the timer and show an alert
            if (timerDuration <= 0) {
                stopTimer();
                alert("Time's up!");
            }
        }, 1000);
    }
  
    // Function to stop the timer
    function stopTimer() {
        // Clear the timer interval
        clearInterval(timer);
        // Set the flag indicating that the timer is not running
        isRunning = false;
        // Change the button text to 'Start'
        startStopButton.textContent = 'Start';
    }
  
    // Function to reset the timer
    function resetTimer(){
      // Clear the timer interval
      clearInterval(timer);
      // Reset the timer duration to 0
      timerDuration = 0;
      // Set the flag indicating that the timer is not running
      isRunning = false;
      // Update the displayed time
      updateDisplay(timerDuration);
      // Change the button text to 'Start'
      startStopButton.textContent = 'Start';
    } 
  
    // Function to update the displayed time
    function updateDisplay(seconds) {
        // Calculate minutes and remaining seconds
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        // Update the timer display with the formatted time
        timerDisplay.textContent = `${pad(minutes)}:${pad(remainingSeconds)}`;
    }
  
    // Function to pad a number with a leading zero if less than 10
    function pad(number) {
        return number < 10 ? '0' + number : number;
    }
  });
