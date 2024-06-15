// script.js
document.addEventListener('DOMContentLoaded', () => {
    let colorInterval;
  
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
  
    startButton.addEventListener('click', () => {
      if (colorInterval) return; // Prevent multiple intervals from being set
      colorInterval = setInterval(changeBackgroundColor, 1000);
    });
  
    stopButton.addEventListener('click', () => {
      clearInterval(colorInterval);
      colorInterval = null;
    });
  
    function changeBackgroundColor() {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.body.style.backgroundColor = randomColor;
    }
  });
  