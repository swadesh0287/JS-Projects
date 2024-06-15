const emojiDiv = document.querySelector('#emoji');
const emojis = [
  '😆', '😅', '🤣', '😂', '😀', '🤑', '🤨', '🙂', '😊', '😗',
  '😛', '😏', '🤥', '😴', '🥺', '😧', '😇', '😳', '🙃', '🥴',
  '🧐', '🤨', '😒', '🤔', '🤭', '🥰', '🤐', '👀', '🤔', '🤪',
  '🥲', '😃', '😁', '😬'
];

emojiDiv.addEventListener('mouseenter', changeEmoji);
emojiDiv.addEventListener('mouseleave', grayscaleEmoji);

function changeEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  emojiDiv.textContent = randomEmoji;
  emojiDiv.style.filter = 'none'; // Reset grayscale filter
}

function grayscaleEmoji() {
  emojiDiv.style.filter = 'grayscale(100%)';
}
