export default class RibbonMenu {
  elem = null;
  categories = [];

  constructor(categories) {
    this.categories = categories || this.categories;
    this.elem = this.#render();
  }

  #template() {

    return `
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
        ${this.categories.map(category => `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`).join("")}
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `;
  }

  #onRibbonClick = () => {
    const buttonLeft = this.elem.querySelector('.ribbon__arrow_left');
    const buttonRight = this.elem.querySelector('.ribbon__arrow_right');
    const menu = this.elem.querySelector('.ribbon__inner');

    buttonRight.addEventListener('click', () => {
      menu.scrollBy(350, 0);
    });

    buttonLeft.addEventListener('click', () => {
      menu.scrollBy(-350, 0);
    });

    menu.addEventListener('scroll', () => {
      const scrollRight = menu.scrollWidth - menu.scrollLeft - menu.clientWidth;

      if (menu.scrollLeft < 1) {
        buttonLeft.classList.remove('ribbon__arrow_visible');
      } else {
        buttonLeft.classList.add('ribbon__arrow_visible');
      }

      if (scrollRight < 1) {
        buttonRight.classList.remove('ribbon__arrow_visible');
      } else {
        buttonRight.classList.add('ribbon__arrow_visible');
      }

    });
  };

  #tabsClick = () => {
    const tabs = this.elem.querySelectorAll('.ribbon__item');

    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();

        tabs.forEach((tab) => {

          if (tab.classList.contains('ribbon__item_active')) {
            tab.classList.remove('ribbon__item_active');
          }
        });
        tab.classList.add('ribbon__item_active');
        const tabId = tab.closest('.ribbon__item').dataset.id;

        const event = new CustomEvent('ribbon-select', {
          bubbles: true,
          detail: tabId,
        });

        tab.dispatchEvent(event);
      });
    });
  };

  #render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.elem.innerHTML = this.#template();

    this.#onRibbonClick();
    this.#tabsClick();

    return this.elem;
  }
}
