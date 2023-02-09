import './style.css'

const header = document.querySelector("header");
const home = document.querySelector(".home");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80)
    home.classList.toggle("nav-offset", window.scrollY > 80)
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
}

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });

const nextSlide = document.querySelector('.swiper-button-next')
const prevSlide = document.querySelector('.swiper-button-prev')

nextSlide.onclick = () => {
  swiper.slideNext();
}

prevSlide.onclick = () => {
  swiper.slidePrev();
}