const items = document.querySelectorAll(".carousel");
const nbSlide = items.length;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let count = 0;

function nextSlide() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
}

next.addEventListener("click", nextSlide);

function prevSlide() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("active");
}

prev.addEventListener("click", prevSlide);
//-------------------Carousel