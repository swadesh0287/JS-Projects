document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the class 'button'
    const buttons = document.querySelectorAll('.button');
    
    // Add event listeners to each button
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the id of the clicked button which corresponds to the color
        const color = this.id;
        
        // Change the background color of the body
        document.body.style.backgroundColor = color;
      });
    });
  });