import {
  initialCards,
  cardTemplate,
  cardsContainer,
  popups,
  formSelectors,
  profileEditBtn,
  addCardBtn,
  editProfileForm,
  addCardForm,
  addCardPopup,
  cardTitle,
  cardImg,
  editProfilePopup,
  userNameInput,
  userInfoInput,
  profileNameElement,
  profileInfoElement,
  popupWithImageSelector,
  cardsContainerSelector
} from '../utils/constans.js';

import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
//import PopupWithForm from '../components/PopupWithForm.js';

//import Popup from '../components/Popup.js'; // Для теста

////////////////////////////////////////////////////
// import Card from './Card.js';
// import FormValidator from './FormValidator.js';
// import UserInfo from './UserInfo.js';
// import { closePopup, openPopup } from './popupManagment.js';

//const testPopup = new Popup('.popup_type_add-card'); // тест попапа

// Создание экземпляра класса UserInfo
const userInfo = new UserInfo({
  name: '.profile__title',
  info: '.profile__description'
})

// Создание экземпляра класса PopupWithImage
const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

// Создание объекта валидации формы редактирования профиля и вызов метода enableValidation
const editProfileFormValidator = new FormValidator(formSelectors, editProfileForm);
editProfileFormValidator.enableValidation();

// Создание объекта валидации добавления новой карточки и вызов метода enableValidation
const addCardFormValidator = new FormValidator(formSelectors, addCardForm);
addCardFormValidator.enableValidation();

// // Закрытие попапа по крестику и фону
// popups.forEach(popup => {
//   popup.addEventListener('mousedown', (evt) => {
//       if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup')) {
//         closePopup(popup);
//       }
//   });
// });

// Создание новой карточки
// const generateNewCard = (item) => {
//   const newCard = new Card(item, cardTemplate);
//   return newCard.generateCard();
// };

// Создание новой карточки
const generateNewCard = (data) => {
  const card = new Card( {
    data: data,
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  }, cardTemplate);
  return card;
};

// Вставка карточек в контейнер
const cardList = new Section( {
  items: initialCards,
  renderer: (item) => {
    const card = generateNewCard(item);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  } }, cardsContainerSelector);
cardList.renderItems();

// // Вставка карточки в контейнер
// const addNewCard = (item) => {
//   cardsContainer.prepend(item);
// };

// // Создание дефолтных карточек из массива
// initialCards.reverse().forEach((card) => {
//   const newCard = generateNewCard(card);
//   addNewCard(newCard);
// });

// Обработчик формы добавления карточки
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const card = {
    name: cardTitle.value,
    link: cardImg.value
  }

  const newCard = generateNewCard(card);
  addNewCard(newCard);
  addCardForm.reset();
  closePopup(addCardPopup);
}

// Вешаем слушатель на сабмит формы добавления новой карточки
addCardForm.addEventListener('submit', handleAddCardFormSubmit);

// Вешаем слушатель на клик по кнопке добавления новой карточки
addCardBtn.addEventListener('click', () => {
  addCardFormValidator.disableButton();
  addCardForm.reset();
  //openPopup(addCardPopup);
  testPopup.open(); 
  testPopup.setEventListeners();  
});

// Обработчик формы редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(userNameInput, userInfoInput);  
  closePopup(editProfilePopup);
}

// Вешаем слушатель на клик по кнопке редактирования профиля
profileEditBtn.addEventListener('click', () => {
  editProfileFormValidator.clearValidationErrors();
  editProfileFormValidator.enableButton();
  const userData = userInfo.getUserInfo()
  userNameInput.value = userData.name
  userInfoInput.value = userData.info
  openPopup(editProfilePopup);  
});

// Вешаем слушатель на сабмит формы редактирования профиля
editProfileForm.addEventListener('submit', handleProfileFormSubmit);