import "./swiper.js";

window.toggleMenu= toggleMenu; // trazendo a função global para o module

function toggleMenu(){
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}