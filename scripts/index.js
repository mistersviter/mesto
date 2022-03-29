// Секция с профилем
const profileSection = document.querySelector('.profile');
const profileEditBtn = profileSection.querySelector('.profile__edit-profile-button');
const profileName = profileSection.querySelector('.profile__title');
const profileJob = profileSection.querySelector('.profile__description');
const addCardBtn = profileSection.querySelector('.profile__add-card-button');

// Формы
// Форма профиля
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileContainer = editProfilePopup.querySelector('.popup__container');
const editProfileCloseBtn = editProfileContainer.querySelector('.popup__close-button');
const editProfileForm = editProfileContainer.querySelector('.popup__form');
const nameInput = editProfileForm.querySelector('.popup__input_type_name');
const jobInput = editProfileForm.querySelector('.popup__input_type_description');

// Формы
// Форма новой карточки
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardContainer = addCardPopup.querySelector('.popup__container');
const addCardCloseBtn = addCardContainer.querySelector('.popup__close-button');
const addCardForm = addCardContainer.querySelector('.popup__form');
const cardTitle = addCardForm.querySelector('.popup__input_type_card-title');
const cardImg = addCardForm.querySelector('.popup__input_type_card-image'); 

// Карточки
const initialCards = [
  {
    name: 'Брангуа Харрор Сутас',
    link: '../images/card_image1.jpg'
  },
  {
    name: 'Аэронас Ту',
    link: '../images/card_image2.jpg'
  },
  {
    name: 'Огос',
    link: '../images/card_image3.jpg'
  },
  {
    name: 'Иби',
    link: '../images/card_image4.jpg'
  },
  {
    name: 'Хорсара',
    link: '../images/card_image5.jpg'
  },
  {
    name: 'Вурбедиу Моно Нахл',
    link: '../images/card_image6.jpg'
  }
];
const cardsContainer = document.querySelector('.places__cards');

// Функции
function popupOpen(popup) {
  popup.classList.add('popup_opened');
  setFormFieldsValues();
}

function setFormFieldsValues() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

function profileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(editProfilePopup);
}

function addCardFormSubmitHandler(evt) {
  evt.preventDefault();   
  renderCard(cardTitle.value, cardImg.value);
  popupClose(addCardPopup);
}

const createCard = (cardName, cardLink) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  card.querySelector('.card__image').src = cardLink;
  card.querySelector('.card__title').textContent = cardName;
  card.querySelector('.card__like-button').addEventListener('click', evt => evt.target.classList.toggle('card__like-button_active'));
  card.querySelector('.card__delete-button').addEventListener('click', evt => evt.target.closest('.card').remove());

  return card;
}

const elements = initialCards.map(card => {
  return createCard(card.name, card.link);
});

function renderCard(cardName, cardLink) {
  cardsContainer.prepend(createCard(cardName, cardLink));
}

cardsContainer.append(...elements);

// Вызовы
profileEditBtn.addEventListener('click', () => popupOpen(editProfilePopup));
editProfileCloseBtn.addEventListener('click', () => popupClose(editProfilePopup));

editProfileForm.addEventListener('submit', profileFormSubmitHandler);

addCardForm.addEventListener('submit', addCardFormSubmitHandler);

addCardBtn.addEventListener('click', () => popupOpen(addCardPopup));
addCardCloseBtn.addEventListener('click', () => popupClose(addCardPopup));