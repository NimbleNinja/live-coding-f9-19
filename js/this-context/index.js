const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
  getTime() {
    const nole = this.secondsPassed < 10 ? '0' : '';

    return `${this.minsPassed}:${nole}${this.secondsPassed}`;
  },
};

timer.startTimer();

setTimeout(() => {
  console.log(timer.getTime());
}, 5000);
