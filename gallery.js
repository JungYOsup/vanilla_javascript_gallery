"use strict";

const items = document.querySelectorAll(".item");

const chageTransform = (e) => {
  items.forEach((item) => {
    if (item != e.target) {
      item.classList.remove("clicked");
    }
  });
  e.target.classList.toggle("clicked");
};

if (items) {
  items.forEach((item) => {
    item.addEventListener("click", chageTransform);
  });
}

// 클릭했을때 이런 CSS를 추가하자
// transition: all 1s;
//   transition-timing-function: cubic-bezier(0.44, -0.86, 0.82, 1);
