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

// Попапы
// Попап зум картинки
const zoomPopup = document.querySelector('.popup_type_zoom');
const zoomContainer = zoomPopup.querySelector('.popup__zoom-container');
const zoomFigure = zoomContainer.querySelector('.popup__zoom-figure');
const zoomImage = zoomFigure.querySelector('.popup__zoom-image');
const zoomCaption = zoomFigure.querySelector('.popup__zoom-caption');

// Карточки
const initialCards = [
  {
    name: 'Брангуа Харрор Сутас',
    link: './images/card_image1.jpg'
  },
  {
    name: 'Аэронас Ту',
    link: './images/card_image2.jpg'
  },
  {
    name: 'Огос',
    link: './images/card_image3.jpg'
  },
  {
    name: 'Иби',
    link: './images/card_image4.jpg'
  },
  {
    name: 'Хорсара',
    link: './images/card_image5.jpg'
  },
  {
    name: 'Вурбедиу Моно Нахл',
    link: './images/card_image6.jpg'
  }
];
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__cards');

// Функции
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function setProfileFormFieldsValues() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();   
  addNewCard(cardTitle.value, cardImg.value);
  addCardForm.reset();
  closePopup(addCardPopup);
}

const createCard = (cardName, cardLink) => {  
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const cardLikeBtn = card.querySelector('.card__like-button');
  const cardDeleteBtn = card.querySelector('.card__delete-button');
  
  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardTitle.textContent = cardName;

  cardLikeBtn.addEventListener('click', evt => evt.target.classList.toggle('card__like-button_active'));
  cardDeleteBtn.addEventListener('click', () => card.remove());
  cardImage.addEventListener('click', () => {
    changeZoomContent(cardName, cardLink);
    openPopup(zoomPopup);    
  });

  return card;
}

const elements = initialCards.map(card => {
  return createCard(card.name, card.link);
});

function addNewCard(cardName, cardLink) {
  cardsContainer.prepend(createCard(cardName, cardLink));
}

function changeZoomContent(cardName, cardLink) {
  zoomImage.src = cardLink;
  zoomImage.alt = cardName;
  zoomCaption.textContent = cardName;
}

cardsContainer.append(...elements);

// Вызовы
profileEditBtn.addEventListener('click', () => {
  setProfileFormFieldsValues();
  openPopup(editProfilePopup);
});

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

addCardForm.addEventListener('submit', handleAddCardFormSubmit);

addCardBtn.addEventListener('click', () => openPopup(addCardPopup));

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
     if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup);
      }
  });
});