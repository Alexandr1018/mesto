
import {preloadedCards, selectors, elementsContainer, template, popupTemplate} from './utils.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const cardsDefault = new Card (preloadedCards, template);
cardsDefault.renderCards(elementsContainer);

popupTemplate.forEach(item => {
  new FormValidator(item, selectors).enableValidation();
});

