const carousel = document.querySelector('#carousel-panel');
const carouselSubelements = getSubElementsCarousel(carousel)

function getSubElementsCarousel(element) {
  const carouselImages = element.querySelector(".carousel-gallery__images");
  const carouselControls = element.querySelector(".carousel-controls");
  const prevButton = element.querySelector(".carousel-gallery__prev");
  const nextButton = element.querySelector(".carousel-gallery__next");
  const stripes = element.querySelectorAll(".carousel-gallery__pagination span");

  return {
    carouselImages,
    carouselControls,
    prevButton,
    nextButton,
    stripes
  }
}

let currentSlide = 0;
const slideWidth = 25;
const numSlides = carouselSubelements.carouselImages.children.length;

carouselSubelements.prevButton.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = numSlides - 1;
  } else {
    currentSlide--;
  }
  carouselSubelements.carouselImages.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  setActiveStripe();
});

carouselSubelements.nextButton.addEventListener("click", () => {
  if (currentSlide === numSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  carouselSubelements.carouselImages.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  setActiveStripe();
});

function setActiveStripe() {
  carouselSubelements.stripes.forEach((stripe, index) => {
    if (index === currentSlide) {
      stripe.classList.add("carousel-gallery__page_state_active");
    } else {
      stripe.classList.remove("carousel-gallery__page_state_active");
    }
  });
}