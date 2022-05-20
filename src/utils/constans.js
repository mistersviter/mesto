const branguaHorrorSutas = new URL('../images/card_image1.jpg', import.meta.url);
const aeronasTu = new URL('../images/card_image2.jpg', import.meta.url);
const ogos = new URL('../images/card_image3.jpg', import.meta.url);
const ibi = new URL('../images/card_image4.jpg', import.meta.url);
const khorsara = new URL('../images/card_image5.jpg', import.meta.url);
const vourbediuMonoNakhl = new URL('../images/card_image6.jpg', import.meta.url);

const initialCards = [
  {
    name: 'Брангуа Харрор Сутас',
    link: branguaHorrorSutas
  },
  {
    name: 'Аэронас Ту',
    link: aeronasTu
  },
  {
    name: 'Огос',
    link: ogos
  },
  {
    name: 'Иби',
    link: ibi
  },
  {
    name: 'Хорсара',
    link: khorsara
  },
  {
    name: 'Вурбедиу Моно Нахл',
    link: vourbediuMonoNakhl
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
  userNameInput,
  userInfoInput,
  popupWithImageSelector,
  profileEditPopupSelector,
  addCardPopupSelector,
  cardsContainerSelector,
  profileNameElement,
  profileInfoElement
};