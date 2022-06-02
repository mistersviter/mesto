import './pages/index.css';

import {
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
  profileInfoElement,
  config,
  popupWithSubmitSelector,
  changeAvatarBtn,
  changeAvatarPopupSelector,
  changeAvatarForm,
  avatarElement
} from '../src/utils/constans.js';

import UserInfo from '../src/components/UserInfo.js';
import Section from '../src/components/Section.js';
import Card from '../src/components/Card.js';
import FormValidator from '../src/components/FormValidator.js';
import PopupWithImage from '../src/components/PopupWithImage.js';
import PopupWithForm from '../src/components/PopupWithForm.js';
import PopupWithSubmit from '../src/components/PopupWithSubmit.js';
import Api from '../src/components/Api.js';

// Создание экземпляра класса Api
const api = new Api(config);

// Создание экземпляра класса UserInfo
const userInfo = new UserInfo({
  userName: profileNameElement,
  userDescription: profileInfoElement,
  userAvatar: avatarElement
});

// Создание экземпляра класса Section
const cardList = new Section({
  renderer: (item) => {
    const card = generateNewCard(item);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }}, cardsContainerSelector);

let userId;
// Получение информации о карточках и о пользователе с сервера
api.getInitialData()
  .then(([cards, userData]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userId = userData._id
    
    cardList.renderItems(cards);
  })
  .catch((err) => console.log(err));

// Создание новой карточки
const generateNewCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupWithImage.open(data);
    },
    handleDeleteCardClick: () => {      
      const obj = {
        data: data,
        card: card
      }
      // Передача объекта и элемента карточки в попап
      popupWithSubmit.open(obj);
    },
    handleCardLikeClick: () => {
      const alredyLiked = card.getCardLikeStatus();
      if (alredyLiked) {
        api.removeLikeCard(data)
          .then((res) => {
            card.updateCardLikeInfo(res);
          })
          .catch(err => console.log(err));
      }
      else {
        api.likeCard(data)
          .then((res) => {
            card.updateCardLikeInfo(res);
          })
          .catch(err => console.log(err));
      }      
    }
  }, cardTemplate, userId);
  return card;
};

// Создание экземпляра класса PopupWithForm для изменения аватара
const changeAvatarPopup = new PopupWithForm(changeAvatarPopupSelector, {
  handleFormSubmit: (newValues) => {
    changeAvatarPopup.renderLoading(true);
    api.updateUserAvatar(newValues)
      .then((res) => {
        userInfo.setUserAvatar(res);
        changeAvatarPopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => changeAvatarPopup.renderLoading(false));
  }
});
changeAvatarPopup.setEventListeners();

// Создание экземпляра класса PopupWithForm для редактирования профиля
const profileEditPopup = new PopupWithForm(profileEditPopupSelector, {
  handleFormSubmit: (newValues) => {
    profileEditPopup.renderLoading(true);
    api.updateUserInfo(newValues)
      .then(userData => {
        userInfo.setUserInfo(userData);
        profileEditPopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => profileEditPopup.renderLoading(false));
  }
});
profileEditPopup.setEventListeners();

// Создание экземпляра класса PopupWithForm для добавления новой карточки
const addCardPopup = new PopupWithForm(addCardPopupSelector, {
  handleFormSubmit: (newValues) => {
    addCardPopup.renderLoading(true);
    api.addUserCard(newValues)
      .then(cardData => {
        const card = generateNewCard(cardData);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
        addCardFormValidator.disableButton();
        addCardPopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => addCardPopup.renderLoading(false));
  }
});
addCardPopup.setEventListeners();

// Создание экземпляра класса PopupWithImage
const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

// Создание экземпляра класса PopupWithSubmit
const popupWithSubmit = new PopupWithSubmit({
  handleDeleteCardSubmit: (data) => {
    popupWithSubmit.renderLoading(true);
    api.deleteUserCard(data)
      .then(() => {
        // Возвращаем объект карточки для удаления
        const cardToDelete = popupWithSubmit.getCardElement();
        cardToDelete.removeCard();
        popupWithSubmit.close();
      })
      .catch(err => console.log(err))
      .finally(() => popupWithSubmit.renderLoading(false));
  }
}, popupWithSubmitSelector);
popupWithSubmit.setEventListeners();

// Создание объекта валидации формы редактирования профиля и вызов метода enableValidation
const editProfileFormValidator = new FormValidator(formSelectors, editProfileForm);
editProfileFormValidator.enableValidation();

// Создание объекта валидации добавления новой карточки и вызов метода enableValidation
const addCardFormValidator = new FormValidator(formSelectors, addCardForm);
addCardFormValidator.enableValidation();

// Создание объекта валидации формы обновления аватара и вызов метода enableValidation
const changeAvatarFormValidator = new FormValidator(formSelectors, changeAvatarForm);
changeAvatarFormValidator.enableValidation();

// Вешаем слушатель на клик по кнопке добавления новой карточки
addCardBtn.addEventListener('click', () => {
  addCardFormValidator.clearValidationErrors();
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

// Вешаем слушатель на клик по кнопке редактирования аватара
changeAvatarBtn.addEventListener('click', () => {
  changeAvatarFormValidator.clearValidationErrors();
  changeAvatarFormValidator.disableButton();
  changeAvatarForm.reset();
  changeAvatarPopup.open();
});