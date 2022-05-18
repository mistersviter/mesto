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

const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error'
};

// Секция с профилем
const profileSection = document.querySelector('.profile');
const profileEditBtn = profileSection.querySelector('.profile__edit-profile-button');
const profileNameElement = profileSection.querySelector('.profile__title');
const profileInfoElement = profileSection.querySelector('.profile__description');
const addCardBtn = profileSection.querySelector('.profile__add-card-button');

// Попапы
const popups = document.querySelectorAll('.popup');

// Попапы
// Попап профиля
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileContainer = editProfilePopup.querySelector('.popup__container');
const editProfileForm = editProfileContainer.querySelector('.popup__form');
const userNameInput = editProfileForm.querySelector('.popup__input_type_name');
const userInfoInput = editProfileForm.querySelector('.popup__input_type_description');

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

// Selectors
const cardTemplate = '#card-template';
const popupWithImageSelector = '.popup_type_zoom';
const profileEditPopupSelector = '.popup_type_edit-profile';
const addCardPopupSelector = '.popup_type_add-card';
const cardsContainerSelector = '.places__cards';

export { 
  initialCards,
  cardTemplate,
  formSelectors,
  profileEditBtn,
  addCardBtn,
  editProfileForm,
  addCardForm,
  addCardPopup,
  cardTitle,
  cardImg,
  editProfilePopup,
  userNameInput,
  userInfoInput,
  profileNameElement,
  profileInfoElement,
  popupWithImageSelector,
  profileEditPopupSelector,
  addCardPopupSelector,
  cardsContainerSelector
};