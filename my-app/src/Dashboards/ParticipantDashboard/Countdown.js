function countdown(deadline) {
  const endDate = new Date(deadline);
  const now = new Date();

  let timeLeft = endDate - now;

  const interval = setInterval(() => {
    timeLeft -= 1000;
    if (timeLeft < 0) {
      clearInterval(interval);
      console.log("Countdown finished!");
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
  }, 1000);
}
