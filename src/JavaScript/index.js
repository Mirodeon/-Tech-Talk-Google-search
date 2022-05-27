//Carousel1
{
    const items = document.querySelectorAll(".carousel1");
    const nbSlide = items.length;
    const next = document.querySelector(".next1");
    const prev = document.querySelector(".prev1");

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
}
//Carousel1

//Carousel2
{
    const items = document.querySelectorAll(".carousel2");
    const nbSlide = items.length;
    const next = document.querySelector(".next2");
    const prev = document.querySelector(".prev2");

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
}
//Carousel2

//Carousel3
{
    const items = document.querySelectorAll(".carousel3");
    const nbSlide = items.length;
    const next = document.querySelector(".next3");
    const prev = document.querySelector(".prev3");

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
}
//Carousel3

//Carousel4
{
    const items = document.querySelectorAll(".carousel4");
    const nbSlide = items.length;
    const next = document.querySelector(".next4");
    const prev = document.querySelector(".prev4");

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
}
//Carousel4

//Carousel5
/*{
    const items = document.querySelectorAll(".carousel5");
    const nbSlide = items.length;
    const next = document.querySelector(".next5");
    const prev = document.querySelector(".prev5");

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
}*/
//Carousel5

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
  
