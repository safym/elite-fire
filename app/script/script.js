const header = document.querySelector('#header');

document.addEventListener('scroll', (event) => {
  console.log(header)
  console.log(event.target)

  if (document.documentElement.scrollTop > 80) {
    header.classList.add("header_position_sticky");
  } else {
    header.classList.remove("header_position_sticky");
  }
})