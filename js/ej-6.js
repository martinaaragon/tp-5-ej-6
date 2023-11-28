let timerInterval;
let timerValue = 0;

function startTimer() {
    const timerInput = document.getElementById('timer-input');
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    
    timerValue = parseInt(timerInput.value);

    if (timerValue > 0) {
        startBtn.disabled = true;
        pauseBtn.disabled = false;

        timerInterval = setInterval(function() {
            if (timerValue > 0) {
                timerValue--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                resetTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');

    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetTimer() {
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const timerInput = document.getElementById('timer-input');
    const timerDisplay = document.getElementById('timer');

    clearInterval(timerInterval);
    timerValue = parseInt(timerInput.value);
    updateTimerDisplay();

    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = timerValue;
}
