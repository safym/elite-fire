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
const totalLengthElement = document.querySelector('.constructor__length-result-value');
const totalSumElement = document.querySelector('.constructor__price');

const configurationElement =  document.querySelector('.constructor__configuration-wrapper');

let length = slider.value;
totalLengthElement.innerHTML = `${length} м`;

const minSum = 86000;
let totalSum = minSum + (length * 2000);
totalSumElement.innerHTML = `${totalSum.toLocaleString('ru-RU')} &#8381;`;

const optionValue = 1000;


configurationElement.addEventListener('input', (e) => {
  if (e.target.classList.contains('slider__input')) {
    const lengthCoeff = e.target.value
    totalSum = minSum + (lengthCoeff * 2000);
    totalLengthElement.innerHTML = `${lengthCoeff} м`;
  }
  if (e.target.classList.contains('checkbox__input')) {
    (e.target.checked)
    ? totalSum = totalSum + optionValue
    : totalSum = totalSum - optionValue
  }

  totalSumElement.innerHTML = `${totalSum.toLocaleString('ru-RU')} &#8381;`;
});


// function getFormElements(form) {
//   const result = {};
//   const elements = form.querySelectorAll("[data-element]");

//   for (const formElement of elements) {
//     const name = formElement.dataset.element;
//     result[name] = formElement;
//   }

//   return result;
// }


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