export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = selector;
    this._elementContainer = document.querySelector(this._selector);
  }

  renderer() {
    this._items.slice().reverse().forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._elementContainer.prepend(element);
  }
}
