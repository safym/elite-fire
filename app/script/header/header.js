const header = document.querySelector('#header');
const body = document.querySelector('body')

initEventListeners();

checkWindowWidth()

function initEventListeners() {
  window.onresize = () => {
    checkWindowWidth()
  }

  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 80) {
      header.classList.add("header_position_sticky");
    } else {
      header.classList.remove("header_position_sticky");
    }
  })
}

function checkWindowWidth() {
  if (window.innerWidth <= 768) {
    header.classList.add("header_position_fixed");
  } else {
    header.classList.remove("header_position_fixed");
  }
}