export default class Carousel {
  elem = null;
  #slides = [];

  constructor(slides) {
    this.#slides = slides || this.#slides;
    this.elem = this.#render();
  }

  #template() {

    return `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">

      ${this.#slides.map((slide) => {
      return `
            <div class="carousel__slide" data-id=${slide.id}>
              <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${(slide.price).toFixed(2)}</span>
                <div class="carousel__title">${slide.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
               </div>
            </div>`;
    }).join('')}
    </div>`;
  }

  #carousel = () => {
    const carousel = this.elem.querySelector(".carousel__inner");
    const buttonPrev = this.elem.querySelector(".carousel__arrow_left");
    const buttonNext = this.elem.querySelector(".carousel__arrow_right");
    const slides = this.elem.querySelectorAll('.carousel__slide');

    let numberPx = 0;
    if (numberPx === 0) {
      buttonPrev.style.display = "none";
    }

    buttonPrev.addEventListener("click", () => {
      buttonNext.style.display = "";
      numberPx--;
      carousel.style.transform = `translateX(-${slides[0].offsetWidth * numberPx}px)`;


      if (numberPx < slides.length - 1) {
        buttonNext.style.display = "";
      }

      if (numberPx === 0) {
        buttonPrev.style.display = "none";
      }
    });

    buttonNext.addEventListener("click", () => {
      numberPx++;

      carousel.style.transform = `translateX(-${slides[0].offsetWidth * numberPx}px)`;

      if (numberPx > 0) {
        buttonPrev.style.display = "";
      }

      if (numberPx === slides.length - 1) {
        buttonNext.style.display = "none";
      }
    });
  };


  #productClick = (e) => {
    const buttons = this.elem.querySelectorAll(".carousel__button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const slideId = button.closest('.carousel__slide').dataset.id;

        const event = new CustomEvent('product-add', {
          bubbles: true,
          detail: slideId,
        });

        button.dispatchEvent(event);
      });
    });
  };

  #render() {

    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.innerHTML = this.#template();

    this.#productClick();

    this.#carousel();
    return this.elem;
  }
}
