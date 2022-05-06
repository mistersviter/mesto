import { initialCards, cardTemplate, cardsContainer, popups, formSelectors, profileEditBtn, addCardBtn, editProfileForm, addCardForm, addCardPopup, cardTitle, cardImg, editProfilePopup, nameInput, jobInput, profileName, profileJob } from './constans.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { closePopup, openPopup } from './popupManagment.js';


// Создание объекта валидации формы редактирования профиля и вызов метода enableValidation
const editProfileFormValidator = new FormValidator(formSelectors, editProfileForm);
editProfileFormValidator.enableValidation();

// Создание объекта валидации добавления новой карточки и вызов метода enableValidation
const addCardFormValidator = new FormValidator(formSelectors, addCardForm);
addCardFormValidator.enableValidation();

// Закрытие попапа по крестику и фону
popups.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup')) {
        closePopup(popup);
      }
  });
});

// Создание новой карточки
const generateNewCard = (item) => {
  const newCard = new Card(item, cardTemplate);
  return newCard.generateCard();
};

// Вставка карточки в контейнер
const addNewCard = (item) => {
  cardsContainer.prepend(item);
};

// Создание дефолтных карточек из массива
initialCards.reverse().forEach((card) => {
  const newCard = generateNewCard(card);
  addNewCard(newCard);
});

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
  openPopup(addCardPopup);  
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
  editProfileFormValidator.clearValidationErrors();
  editProfileFormValidator.enableButton();
  setProfileFormFieldsValues();
  openPopup(editProfilePopup);  
});

// Вешаем слушатель на сабмит формы редактирования профиля
editProfileForm.addEventListener('submit', handleProfileFormSubmit);