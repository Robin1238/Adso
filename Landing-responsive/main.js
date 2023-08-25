const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir Menú");
  }
});

// Slider

let list_div = document.querySelectorAll(".comment-item-card");
let slider = document.querySelector(".slider-container");
let btn_Left = document.querySelector(".btn-left");
let btn_Right = document.querySelector(".btn-right");

// Funciones

btn_Left.addEventListener("click", () => {
  moveLeft();
});

btn_Right.addEventListener("click", () => {
  moveRight();
});

let timer = 0;
function autoMove() {
  timer = setInterval(() => {
    moveAll();
  }, 5000);
}
document.addEventListener("DOMContentLoaded", () => {
  autoMove();
});

btn_Left.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

btn_Right.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

slider.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

slider.addEventListener("mouseleave", () => {
  autoMove();
});

// Principales funciones

let counter = 0;
let translate = 0;
let midDiv = 3250 / list_div.length;

function moveAll() {
  if (counter >= list_div.length - 4) {
    for (let i = 0; i <= 5; i++) {}
    counter = -1;
    translate = 650;
    slider.style.transform = `translateX(${translate}px)`;
    slider.style.transition = "all 1s";
    return;
  }

  counter++;
  translate = translate - midDiv;
  slider.style.transform = `translateX(${translate}px)`;
  slider.style.transition = "all 0.5s";
}

function moveRight() {
  if (counter >= list_div.length - 3) {
    counter = 0;
    translate = 0;
    slider.style.transform = `translateX(-${translate}px)`;
    slider.style.transition = "all 0.5s";
    return;
  }
  counter++;
  translate = translate - midDiv;
  slider.style.transform = `translateX(${translate}px)`;
  slider.style.transition = "all 0.5s";
}

function moveLeft() {
  if (counter <= list_div.length - (list_div.length + list_div.length) + 3) {
    counter = 0;
    translate = 0;
    slider.style.transform = `translateX(${translate}px)`;
    slider.style.transition = "all 0.5s";
    return;
  }

  counter--;
  translate = translate + midDiv;
  slider.style.transform = `translateX(${translate}px)`;
  slider.style.transition = "all 0.5s";
}

// Carrusel

const carruselimg = document.querySelectorAll(".element-img");
for (let [i, imageSelect] of carruselimg.entries()) {
  imageSelect.addEventListener("click", () => {
    resetToggle();
    imageSelect.classList.toggle("element-img-active");
  });
}

const resetToggle = () => {
  carruselimg.forEach((i) => i.classList.remove("element-img-active"));
};
