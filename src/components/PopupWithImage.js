import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._zoomImage = this._popup.querySelector('.popup__zoom-image');
    this._zoomCaption = this._popup.querySelector('.popup__zoom-caption');
  }  

  open(data) {
    super.open();    
    this._zoomImage.src = data.link;
    this._zoomCaption.textContent = data.name;
    this._zoomImage.alt = data.name;
  }
}