// Hamburger nav
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));

// Hero Carousel
const hero = document.querySelector('.hero');
const carouselDotsContainer = hero.querySelector('.carousel-dots');

let currentIndex = 0;
let carouselItems = [];
let dots = [];

// Fetch slides from JSON
fetch('data/hero.json')
    .then(response => response.json())
    .then(slidesData => {
        // Create slides dynamically
        slidesData.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('carousel-item');
            if(index === 0) slideDiv.classList.add('active');
            slideDiv.innerHTML = `
                <img src="${slide.image}" alt="${slide.title}">
                <div class="carousel-overlay"></div>
                <div class="carousel-text">
                    <h2>${slide.title}</h2>
                    <p>${slide.desc}</p>
                    <a href="${slide.link}" class="hero-btn">Shop Now</a>
                </div>
            `;
            hero.insertBefore(slideDiv, carouselDotsContainer);
            carouselItems.push(slideDiv);

            const dot = document.createElement('span');
            dot.classList.add('dot');
            if(index === 0) dot.classList.add('active');
            dot.addEventListener('click', ()=> showSlide(index));
            carouselDotsContainer.appendChild(dot);
            dots.push(dot);
        });

        // Auto-scroll
        setInterval(()=>{ showSlide((currentIndex+1)%carouselItems.length); }, 4000);
    })
    .catch(error => console.error("Failed to load slides.json:", error));

// Show slide function
function showSlide(index){
    carouselItems.forEach((item,i)=>{
        item.classList.remove('active');
        dots[i].classList.remove('active');
    });
    carouselItems[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

// Connections Panel
const collectionsWrapper = document.querySelector('.collections-wrapper');

fetch('data/collections.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(conn => {
            const item = document.createElement('div');
            item.classList.add('collection-item');
            item.innerHTML = `
                <img src="${conn.image}" alt="${conn.name}">
                <p>${conn.name}</p>
            `;
            collectionsWrapper.appendChild(item);
        });
    })
    .catch(err => console.error("Failed to load connections.json:", err));