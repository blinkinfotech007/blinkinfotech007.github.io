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
fetch("https://api.npoint.io/5fea83f23a9e73f5863b") // Replace with your API endpoint
    .then(response => response.json())
    .then(data => {
      const blogGrid = document.getElementById("blog-grid");
      blogGrid.innerHTML = ""; // Clear existing content

      data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}" class="blog-image">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        `;

        blogGrid.appendChild(card);
      });
    })
    .catch(error => console.error("Error loading blog data:", error));