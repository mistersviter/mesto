import Popup from './Popup.js'

export default class PopupWithSubmit extends Popup {
  constructor({handleDeleteCardSubmit}, popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleDeleteCardSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleFormSubmit(this._data);   
      this.close();
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
}