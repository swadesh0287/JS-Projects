// script.js
document.addEventListener('DOMContentLoaded', () => {
    const insert = document.getElementById('insert');
  
    window.addEventListener('keydown', (event) => {
      const key = event.key === ' ' ? 'Space' : event.key;
      const keyCode = event.keyCode;
      const code = event.code;
  
      insert.innerHTML = `
        <div class="key">
          ${key}
          <small>event.key</small>
        </div>
        <div class="key">
          ${keyCode}
          <small>event.keyCode</small>
        </div>
        <div class="key">
          ${code}
          <small>event.code</small>
        </div>
      `;
    });
  });
  