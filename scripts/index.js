// Секция с профилем
let profileSection = document.querySelector('.profile');
let profileEditBtn = profileSection.querySelector('.profile__edit-profile-button');
let profileName = profileSection.querySelector('.profile__title');
let profileJob = profileSection.querySelector('.profile__description');

// Форма
let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let popupCloseBtn = popupContainer.querySelector('.popup__close-button');
let formElement = popupContainer.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_description');

// Функции
function popupOpen() {
  popup.classList.add('popup_opened');
  setFormFieldsValues();
}

function setFormFieldsValues() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClose(evt) {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(evt);
}

// Вызовы
profileEditBtn.addEventListener('click', popupOpen);
popupCloseBtn.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler); 