"use strict";

function quitbutton() {
  const mockClass = document.querySelector(".mockclass");
  const quit = document.createElement("div");
  quit.classList.add("quit");
  const quitp = document.createElement("p");
  quitp.textContent = "×";
  quit.appendChild(quitp);
  mockClass.appendChild(quit);
  quit.addEventListener("click", function () {
    history.back();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(quitbutton, 3000);
});
