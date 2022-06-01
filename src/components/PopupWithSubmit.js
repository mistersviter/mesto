import Popup from './Popup.js'

export default class PopupWithSubmit extends Popup {
  constructor({handleDeleteCardSubmit}, popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleDeleteCardSubmit;
    this._submitBtn = this._popupForm.querySelector('.popup__submit-button');
    this._submitBtnOriginalText = this._submitBtn.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleFormSubmit(this._data);
    })
  }

  open(obj) {    
    super.open();
    this._data = obj.data;
    this._cardElement = obj.card;
  }

  getCardElement() {
    return this._cardElement;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitBtn.textContent = 'Сохранение...';
    } else {
      this._submitBtn.textContent = this._submitBtnOriginalText;
    }
  }
}