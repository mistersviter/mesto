import { data } from "browserslist";

export default class Card {
  constructor({data, handleCardClick, handleDeleteCardClick, handleCardLikeClick}, cardSelector, userId) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleCardLikeClick = handleCardLikeClick;
    this._cardSelector = cardSelector;
    this._isOwner();
    this.isLiked();
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _toggleLikeBtnStatus() {
    this._likeBtn.classList.toggle('card__like-button_active');
  }

  removeCard() {
    this._element.remove();
  }

  _updateLikeStatus() {
    this._likedByUser = !this._likedByUser;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._handleCardLikeClick());
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

  _updateCardLikesCounter(updateData) {
    this._likeCounter.textContent = updateData.likes.length;
  }

  updateCardLikeInfo(updateData) {
    this._updateCardLikesCounter(updateData);
    this._toggleLikeBtnStatus();
    this._updateLikeStatus();
  }

  isLiked() {
    if (this._likes.some(obj => obj._id === this._userId)) {
      this._likedByUser = true;
    } else {
      this._likedByUser = false;
    }
  }

  generateCard() {
    
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._likeBtn = this._element.querySelector('.card__like-button');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._deleteBtn = this._element.querySelector('.card__delete-button');

    // Удаление иконки корзины, если карточка загружена не пользователем
    if (!this._ownedByUser) {
      this._deleteBtn.remove();
    }

    // Закрашиваем сердечко если пользователь уже лайкал карточку
    if (this._likedByUser) {
      this._toggleLikeBtnStatus();
    }

    this._setEventListeners();

    this._cardImage.src = this._image;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._likeCounter.textContent = this._likes.length;    

    return this._element;
  }
}