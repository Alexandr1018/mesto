export default class Section {
  constructor({ items, renderItems }, selector) {
    this._items = items;
    this._renderItems = renderItems;
    this._selector = selector;
    this._elementContainer = document.querySelector(this._selector);
  }

  renderItems() {
    this._items.slice().reverse().forEach(item => this._renderItems(item));
  }

  addItem(element) {
    this._elementContainer.prepend(element);
  }
}
