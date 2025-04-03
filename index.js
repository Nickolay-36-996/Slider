"use strict";
const vectorLeft = document.querySelector(".vector__left");
const vectorRight = document.querySelector(".vector__right");
const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const widthAllElements =
  card[0].clientWidth * card.length + 30 * (card.length - 1);
let saveTranslate = 0;

console.log(widthAllElements);

vectorLeft.addEventListener("click", function (event) {
  if (saveTranslate >= 0) {
    saveTranslate = -widthAllElements + card[0].clientWidth
    console.log(saveTranslate);
    cards.style.transform = `translateX(${saveTranslate}px)`
  } else {
    saveTranslate = saveTranslate + (card[0].clientWidth + 30);
    cards.style.transform = `translateX(${saveTranslate}px)`;
  }
});

vectorRight.addEventListener("click", function (event) {
  console.log(saveTranslate);
  if (!(saveTranslate <= -widthAllElements + (card[0].clientWidth + 30))) {
    saveTranslate = saveTranslate - (card[0].clientWidth + 30);
    cards.style.transform = `translateX(${saveTranslate}px)`;
  } else {
    saveTranslate = 0;
    cards.style.transform = `translateX(0)`;
  }
});
