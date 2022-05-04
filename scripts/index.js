import { initialCards, cardTemplate, cardsContainer, popups, formSelectors, profileEditBtn, addCardBtn, editProfileForm, addCardForm, addCardPopup, cardTitle, cardImg, editProfilePopup, nameInput, jobInput, profileName, profileJob } from './constans.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { closePopup, openPopup } from './popupManagment.js';

// Закрытие попапа по крестику и фону
popups.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup')) {
        closePopup(popup);
      }
  });
});

// Создание новой карточки
const addNewCard = (item) => {
  const newCard = new Card(item, cardTemplate);
  newCard.generateCard(cardsContainer);
};

// Создание дефолтных карточек из массива
initialCards.reverse().forEach((card) => {
  addNewCard(card);
});

// Обработчик формы добавления карточки
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const card = {
    name: cardTitle.value,
    link: cardImg.value
  }

  addNewCard(card);
  addCardForm.reset();
  closePopup(addCardPopup);
}

// Вешаем слушатель на сабмит формы добавления новой карточки
addCardForm.addEventListener('submit', handleAddCardFormSubmit);

// Вешаем слушатель на клик по кнопке добавления новой карточки
addCardBtn.addEventListener('click', () => {
  addCardForm.reset();
  openPopup(addCardPopup);

  // Создание объекта валидации добавления новой карточки и вызов метода enableValidation
  const addCardFormValidator = new FormValidator(formSelectors, addCardForm);
  addCardFormValidator.enableValidation();
});

// Установить значения полей в карточке профиля
function setProfileFormFieldsValues() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Обработчик формы редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;  
  closePopup(editProfilePopup);
}

// Вешаем слушатель на клик по кнопке редактирования профиля
profileEditBtn.addEventListener('click', () => {
  setProfileFormFieldsValues();
  openPopup(editProfilePopup);

  // Создание объекта валидации формы редактирования профиля и вызов метода enableValidation
  const editProfileFormValidator = new FormValidator(formSelectors, editProfileForm);
  editProfileFormValidator.enableValidation();
});

// Вешаем слушатель на сабмит формы редактирования профиля
editProfileForm.addEventListener('submit', handleProfileFormSubmit);