//Carousel1
const items = document.querySelectorAll(".carousel1");
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
//Carousel

//Jump Section
let navBtns = [...document.querySelectorAll(".button__nav")];
let themeSection = [...document.querySelectorAll(".theme-section")];

navBtns.forEach((button, i) => {
	button.addEventListener("click", () => {
		resetClasses();
		themeSection[i].classList.add("show-content");
		navBtns[i].classList.add("content-clicked");
	});
});
const resetClasses = () => {
	themeSection.forEach((content) => {
		content.classList.remove("show-content");
	});
	navBtns.forEach((button) => {
		button.classList.remove("content-clicked");
	});
}; 
//Jump Section
