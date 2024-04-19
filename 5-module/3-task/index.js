function initCarousel() {
  const buttonPrev = document.querySelector(".carousel__arrow_left");
  const buttonNext = document.querySelector(".carousel__arrow_right");
  const carousel = document.querySelector(".carousel__inner");
  buttonPrev.style.display = "none";
  let numberPx = 0;

  buttonPrev.addEventListener("click", () => {
    buttonNext.style.display = "";
    if (carousel.style.transform === "translateX(-500px)") {
      buttonPrev.style.display = "none";
    }
    numberPx += 500;
    carousel.style.transform = `translateX(${numberPx}px)`;
  });

  buttonNext.addEventListener("click", () => {
    buttonPrev.style.display = "";
    if (carousel.style.transform === "translateX(-1000px)") {
      buttonNext.style.display = "none";
    }
    numberPx -= 500;
    console.log((carousel.style.transform = `translateX(${numberPx}px)`));
  });
}
