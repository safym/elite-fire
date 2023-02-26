const header = document.querySelector('#header');
const body = document.querySelector('body')
console.log(body)

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
