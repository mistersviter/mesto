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
const addCardSubmitBtn = addCardForm.querySelector('.popup__submit-button');

// Попапы
// Попап зум картинки
const zoomPopup = document.querySelector('.popup_type_zoom');
const zoomContainer = zoomPopup.querySelector('.popup__zoom-container');
const zoomFigure = zoomContainer.querySelector('.popup__zoom-figure');
const zoomImage = zoomFigure.querySelector('.popup__zoom-image');
const zoomCaption = zoomFigure.querySelector('.popup__zoom-caption');

// Карточки
const cardTemplate = '#card-template';
const cardsContainer = document.querySelector('.places__cards');

// Escape
const ESC_KEY = 'Escape';

export { ESC_KEY, initialCards, cardTemplate, cardsContainer, zoomPopup, zoomImage, zoomCaption };