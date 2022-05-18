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
  cardsContainerSelector
} from '../utils/constans.js';

import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

// Создание экземпляра класса UserInfo
const userInfo = new UserInfo({
  name: '.profile__title',
  info: '.profile__description'
});

// Создание экземпляра класса PopupWithForm для редактирования профиля
const profileEditPopup = new PopupWithForm(profileEditPopupSelector, () => {
  userInfo.setUserInfo(userNameInput, userInfoInput)
});
profileEditPopup.setEventListeners();

// Создание экземпляра класса PopupWithForm для добавления новой карточки
const addCardPopup = new PopupWithForm(addCardPopupSelector, (newValues) => {
  const card = generateNewCard(newValues);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  addCardFormValidator.disableButton();
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
  userNameInput.value = userData.name;
  userInfoInput.value = userData.info;
  profileEditPopup.open();  
});