// const btn = document.getElementById("menuBtn");
// const nav = document.getElementById("nav");

// btn.addEventListener("click", () => {
//     nav.classList.toggle("show");
// });

// // AUTO SLIDER (Dynamic)
// const slides = document.getElementById("slides");
// const totalSlides = slides.children.length;
// let index = 0;

// setInterval(() => {
//     index = (index + 1) % totalSlides;
//     slides.style.transform = `translateX(-${index * 100}%)`;
// }, 3000);

const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// ================= LOAD HERO FROM JSON =================
const slidesContainer = document.getElementById("slides");

fetch("data/hero.json")
    .then(res => res.json())
    .then(data => {

        data.forEach(item => {
            const slide = document.createElement("div");
            slide.classList.add("slide");

            slide.innerHTML = `
                <img src="${item.image}" alt="">
                <div class="slide-content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                </div>
            `;

            slidesContainer.appendChild(slide);
        });

        startSlider(data.length);
    });

// ================= LOAD COLLECTIONS FROM JSON =================
const collectionGrid = document.getElementById("collection-grid");

fetch("data/collections.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const card = document.createElement("a");
            card.classList.add("collection-card");
            card.href = item.link;
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            collectionGrid.appendChild(card);
        });
    });

// ================= AUTO SLIDER =================
function startSlider(totalSlides) {
    let index = 0;

    setInterval(() => {
        index = (index + 1) % totalSlides;
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
}