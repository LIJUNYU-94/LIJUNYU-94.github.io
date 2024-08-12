"use strict";

//back to topボタンの作り
window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  const backToTop = document.querySelector(".backtotop");

  if (scrollPosition > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//phone-onlyのnav
const menuBtn = document.querySelector(".all-menu");
const menuLinea = document.querySelector(".all-menu-linea");
const menuLineb = document.querySelector(".all-menu-lineb");
const nav = document.querySelector(".all-navp");

menuBtn.addEventListener("click", function () {
  menuLinea.classList.toggle("open");
  menuLineb.classList.toggle("open");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    disableScroll();
  } else {
    enableScroll();
  }
});

function disableScroll() {
  // 現在のスクロール位置を取得して固定する
  const scroll = window.scroll;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scroll}px`;
}

// スクロールを有効化する関数
function enableScroll() {
  // スクロール位置を元に戻す
  const scroll = parseInt(document.body.style.top || "0", 10);
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, scroll);
}
