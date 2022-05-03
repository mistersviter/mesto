import { initialCards, cardTemplate, cardsContainer } from './constans.js';
import { Card } from './Card.js';
import { closePopup, handleEscDown } from './popupManagment.js';

// Секция с профилем
const profileSection = document.querySelector('.profile');
const profileEditBtn = profileSection.querySelector('.profile__edit-profile-button');
const profileName = profileSection.querySelector('.profile__title');
const profileJob = profileSection.querySelector('.profile__description');
const addCardBtn = profileSection.querySelector('.profile__add-card-button');

// Попапы
const popups = document.querySelectorAll('.popup');

// Попапы
// Попап профиля
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileContainer = editProfilePopup.querySelector('.popup__container');
const editProfileForm = editProfileContainer.querySelector('.popup__form');
const nameInput = editProfileForm.querySelector('.popup__input_type_name');
const jobInput = editProfileForm.querySelector('.popup__input_type_description');

// Попапы
// Попап новой карточки
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardContainer = addCardPopup.querySelector('.popup__container');
const addCardForm = addCardContainer.querySelector('.popup__form');
const cardTitle = addCardForm.querySelector('.popup__input_type_card-title');
const cardImg = addCardForm.querySelector('.popup__input_type_card-image');
const addCardSubmitBtn = addCardForm.querySelector('.popup__submit-button');


// Функции
// Закрытие попапа по нажатию Esc
// const handleEscDown = (evt) => {  
//   if (evt.key === ESC_KEY) {
//     const currentPopup = document.querySelector('.popup_opened');
//     closePopup(currentPopup);
//   }
// }

// // Открыть попап
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', handleEscDown);
// }

// Установить значения полей в карточке профиля
function setProfileFormFieldsValues() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Закрыть попап
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', handleEscDown);
// }

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;  
  closePopup(editProfilePopup);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  addNewCard(cardTitle.value, cardImg.value);
  disableButton(addCardSubmitBtn, dataObj);
  addCardForm.reset();
  closePopup(addCardPopup);
}

// Сброс формы при закрытии
const resetCurrentForm = (popup) => {
  const formElement = popup.querySelector('.popup__form');
  if (formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach(inputElement => hideInputError(formElement, inputElement, dataObj));
    formElement.reset();
  }
};

// Events
profileEditBtn.addEventListener('click', () => {
  resetCurrentForm(editProfilePopup);
  setProfileFormFieldsValues();
  openPopup(editProfilePopup);
});

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

addCardForm.addEventListener('submit', handleAddCardFormSubmit);

addCardBtn.addEventListener('click', () => {
  resetCurrentForm(addCardPopup);
  openPopup(addCardPopup);
});

// Закрытие попапа по крестику и фону
popups.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup')) {
        closePopup(popup);
      }
  });
});

///////////////////////////////////////////////////////////

const addNewCard = (item) => {
  const newCard = new Card(item, cardTemplate);
  newCard.generateCard(cardsContainer);
}

initialCards.reverse().forEach((card) => {
  addNewCard(card);
})