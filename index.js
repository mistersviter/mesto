// Секция с профилем
let profileSection = document.querySelector('.profile');
let profileEditBtn = profileSection.querySelector('.profile__edit-profile-button');
let profileName = profileSection.querySelector('.profile__title');
let profileJob = profileSection.querySelector('.profile__description');

// Форма
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let popupCloseBtn = formElement.querySelector('.popup__close-button');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_description');

// Вызовы
profileEditBtn.addEventListener('click', popupOpen);
popupCloseBtn.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler); 

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
  evt.preventDefault();
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(evt);
}