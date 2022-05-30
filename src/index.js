import './pages/index.css';

import {
  initialCards,
  cardTemplate,
  formSelectors,
  profileEditBtn,
  addCardBtn,
  editProfileForm,
  addCardForm,
  userNameInput,
  userInfoInput,
  popupWithImageSelector,
  profileEditPopupSelector,
  addCardPopupSelector,
  cardsContainerSelector,
  profileNameElement,
  profileInfoElement
} from '../src/utils/constans.js';

import UserInfo from '../src/components/UserInfo.js';
import Section from '../src/components/Section.js';
import Card from '../src/components/Card.js';
import FormValidator from '../src/components/FormValidator.js';
import PopupWithImage from '../src/components/PopupWithImage.js';
import PopupWithForm from '../src/components/PopupWithForm.js';
import Api from '../src/components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: '8b1d9511-936f-474d-a48e-0881c6bc032b',
    'Content-Type': 'application/json'
  }
});

// Создание экземпляра класса UserInfo
const userInfo = new UserInfo({
  userName: profileNameElement,
  userDescription: profileInfoElement
});

// Создание экземпляра класса PopupWithForm для редактирования профиля
const profileEditPopup = new PopupWithForm(profileEditPopupSelector, {
  handleFormSubmit: (newValues) => {
    userInfo.setUserInfo(newValues);
  }
});
profileEditPopup.setEventListeners();


// Создание экземпляра класса PopupWithForm для добавления новой карточки
const addCardPopup = new PopupWithForm(addCardPopupSelector, {
  handleFormSubmit: (newValues) => {
    const card = generateNewCard(newValues);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    addCardFormValidator.disableButton();
  }
});
addCardPopup.setEventListeners();

// Создание экземпляра класса PopupWithImage
const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

// Создание объекта валидации формы редактирования профиля и вызов метода enableValidation
const editProfileFormValidator = new FormValidator(formSelectors, editProfileForm);
editProfileFormValidator.enableValidation();

// Создание объекта валидации добавления новой карточки и вызов метода enableValidation
const addCardFormValidator = new FormValidator(formSelectors, addCardForm);
addCardFormValidator.enableValidation();

// Создание новой карточки
const generateNewCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  }, cardTemplate);
  return card;
};

// Вставка карточек в контейнер
// const cardList = new Section( {
//   renderer: (item) => {
//     const card = generateNewCard(item);
//     const cardElement = card.generateCard();
//     cardList.addItem(cardElement);
//   } }, cardsContainerSelector);
// cardList.renderItems();

// Вешаем слушатель на клик по кнопке добавления новой карточки
addCardBtn.addEventListener('click', () => {
  addCardFormValidator.disableButton();
  addCardForm.reset();
  addCardPopup.open();  
});

// Вешаем слушатель на клик по кнопке редактирования профиля
profileEditBtn.addEventListener('click', () => {
  editProfileFormValidator.clearValidationErrors();
  editProfileFormValidator.enableButton();
  const userData = userInfo.getUserInfo();
  userNameInput.value = userData.userName;
  userInfoInput.value = userData.userDescription;
  profileEditPopup.open();  
});

api.getUserInfo()
  .then(userData => {
    console.log(userData);
    userInfo.setUserInfo(userData)
  })

api.getInitialCards()
  .then(cards => {
    const cardList = new Section( {
      items: cards,
      renderer: (item) => {
        const card = generateNewCard(item);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
      } }, cardsContainerSelector);
    cardList.renderItems();
  })
  .catch(err => console.log(err))