const header = document.querySelector('#header');
const body = document.querySelector('body')

document.addEventListener('scroll', (event) => {
  if (document.documentElement.scrollTop > 80) {
    header.classList.add("header_position_sticky");
  } else {
    header.classList.remove("header_position_sticky");
  }
})

window.onresize = () => {
  if (window.innerWidth <= 768) {
    header.classList.add("header_position_fixed");
  } else {
    header.classList.remove("header_position_fixed");
  }
}

// constructor

const slider = document.querySelector('.slider__input');
const total = document.querySelector('.constructor__length-result-value');

total.innerHTML = `${slider.value} м`;

slider.addEventListener('input', (e) => {
  total.innerHTML = `${e.target.value} м`;
});


// carousel with pagination
const carouselImages = document.querySelector(".carousel-gallery__images");
const carouselControls = document.querySelector(".carousel-controls");
const prevButton = document.querySelector(".carousel-gallery__prev");
const nextButton = document.querySelector(".carousel-gallery__next");
const stripes = document.querySelectorAll(".carousel-gallery__pagination span");

let currentSlide = 0;
const slideWidth = 25; // Width of each slide in percentage
const numSlides = carouselImages.children.length;

prevButton.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = numSlides - 1;
  } else {
    currentSlide--;
  }
  carouselImages.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  setActiveStripe();
});

nextButton.addEventListener("click", () => {
  if (currentSlide === numSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  carouselImages.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  setActiveStripe();
});

function setActiveStripe() {
  stripes.forEach((stripe, index) => {
    if (index === currentSlide) {
      stripe.classList.add("carousel-gallery__page_state_active");
    } else {
      stripe.classList.remove("carousel-gallery__page_state_active");
    }
  });
}