document.addEventListener("DOMContentLoaded", () => {
  function updateClock() {
    const clockElement = document.getElementById("clock");
    if (clockElement) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const timeString = `${hours}:${minutes}:${seconds}`;
      clockElement.textContent = timeString;
    }
  }

 
  setInterval(updateClock, 1000);

  
  updateClock();
});
