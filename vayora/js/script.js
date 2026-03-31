const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// ================= HERO SLIDER =================
const slidesContainer = document.getElementById("slides");

fetch("data/hero.json")
    .then(res => res.json())
    .then(data => {
        const totalSlides = data.length;

        // Set slides container width dynamically
        slidesContainer.style.width = `${totalSlides * 100}%`;

        data.forEach(item => {
            const slide = document.createElement("div");
            slide.classList.add("slide");
            slide.style.width = `${100 / totalSlides}%`; // Each slide = 1/totalSlides of container

            slide.innerHTML = `
                <img src="${item.image}" alt="">
                <div class="slide-content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                </div>
            `;
            slidesContainer.appendChild(slide);
        });

        startSlider(totalSlides);
    });

// ================= AUTO SLIDER =================
function startSlider(totalSlides) {
    let index = 0;

    setInterval(() => {
        index = (index + 1) % totalSlides;
        slidesContainer.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
    }, 3000);
}

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