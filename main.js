const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// services container
ScrollReveal().reveal(".services__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".services__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

// places container
ScrollReveal().reveal(".places__card", {
  ...scrollRevealOption,
  interval: 400,
});

//faq container
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//copyright 

const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('.footer__bar');
yearElement.textContent = `Copyright © ${currentYear} All rights reserved.`;

