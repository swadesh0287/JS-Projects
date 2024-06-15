window.onscroll = function() {
    updateProgress();
  };
  
  function updateProgress() {
    const scrollIndicator = document.querySelector('.progress');
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = scrolled + '%';
  }
  