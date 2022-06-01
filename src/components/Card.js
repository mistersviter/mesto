import { data } from "browserslist";

export default class Card {
  constructor({data, handleCardClick, handleDeleteCardClick}, cardSelector, userId) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._likesCount = data.likes.length;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
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

  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._handleLikeCard());
    this._deleteBtn.addEventListener('click', () => this._handleDeleteCardClick());

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({ 
        name: this._name,
        src: this._link });
      })
  }

  _isOwner() {
    if (this._userId === this._ownerId) {
      this._ownedByUser = true;
    } else {
      this._ownedByUser = false;      
    }   
  }

  generateCard() {
    this._isOwner();
    
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._likeBtn = this._element.querySelector('.card__like-button');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._deleteBtn = this._element.querySelector('.card__delete-button');

    if (!this._ownedByUser) {
      //this._deleteBtn.style.display = 'none';
      this._deleteBtn.remove();
    }

    this._setEventListeners();

    this._cardImage.src = this._image;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._likeCounter.textContent = this._likesCount;    

    return this._element;
  }
}