import Popup from './Popup.js'
//import { zoomImage, zoomCaption } from '../utils/constans.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }  

  open(data) {
    super.open();
    this._zoomImage = this._popup.querySelector('.popup__zoom-image');
    this._zoomCaption = this._popup.querySelector('.popup__zoom-caption');
    this._zoomImage.src = data.link;
    this._zoomCaption.textContent = data.name;
    this._zoomImage.alt = data.name;
  }
}