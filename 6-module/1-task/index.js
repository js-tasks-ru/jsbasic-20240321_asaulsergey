/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  elem = null;
  #list = []

  constructor(rows) {
    this.#list = rows;

    this.elem = this.#render();
  }

  #template() {
    return this.#list.map((value) => `
      <tr>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.salary}</td>
        <td>${value.city}</td>
        <td>
          <button>X</button>
        </td>
      </tr>
    `).join('\n');
  }

  #deleteButtonTr (e) {
    const target = e.target;

    if (!target.closest('button')) {
      return;
    } else {
      target.closest('tr').remove();
    }

  }

  #render() {
    this.elem = document.createElement("table");
    this.elem.innerHTML = this.#template();

    this.elem.addEventListener('click', this.#deleteButtonTr.bind(this));

    return this.elem;
  }
}
