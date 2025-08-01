function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}
document.getElementById('year').textContent = new Date().getFullYear();
const phrases = ["making apps.", "marketing apps.", "publishing apps."];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");
function updateText() {
  dynamicText.textContent = phrases[index];
  index = (index + 1) % phrases.length;
}
updateText();
setInterval(updateText, 1000);
window.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('contactDialog');
    if (dialog && typeof dialog.showModal === 'function') {
      setTimeout(() => {
        dialog.showModal();
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  });
