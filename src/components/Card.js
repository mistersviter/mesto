export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeCard() {
    this._likeBtn.classList.toggle('card__like-button_active');
  }

  _handleRemoveCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._handleLikeCard());
    this._deleteBtn.addEventListener('click', () => this._handleRemoveCard());

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({ 
        name: this._name,
        src: this._link });
      })
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._likeBtn = this._element.querySelector('.card__like-button');
    this._deleteBtn = this._element.querySelector('.card__delete-button');

    this._setEventListeners();    

    this._cardImage.src = this._image;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;    

    return this._element;
  }
}