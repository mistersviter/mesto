import { ESC_KEY } from '../utils/constans.js';

// Открыть попап
export const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscDown);
}

// Закрыть попап
export const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscDown);
}

// Закрытие попапа по нажатию Esc
export const handleEscDown = (evt) => {  
  if (evt.key === ESC_KEY) {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  }
}