"use direct";
//学科ニュースのパーツ

// import Splide from "@splidejs/splide";

// import Splide from "@splidejs/splide";

// new Splide(".splide").mount();

// new Splide(".splide").mount();
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide");
  splide.mount();
});

const key = document.querySelector(".hpp-keyvisual");

key.addEventListener("click", function () {
  key.classList.toggle("open");
});
