export default class FormValidator {
  constructor(selectors, formElement) { 
    this._formElement = formElement;
    this._formSelector = selectors.formSelector;
    this._inputSelector = selectors.inputSelector;
    this._submitButtonSelector = selectors.submitButtonSelector;
    this._inactiveButtonClass = selectors.inactiveButtonClass;
    this._inputErrorClass = selectors.inputErrorClass;
    this._errorClass = selectors.errorClass;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));    
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
  }

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  };
  
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };
  
  _hasInvalidInput() {
    return this._inputList.some(input => {
      return !input.validity.valid;
    })
  };
  
  disableButton() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._inactiveButtonClass);
  };
  
  enableButton() {
    this._submitButton.disabled = false;
    this._submitButton.classList.remove(this._inactiveButtonClass);
  };
  
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableButton();
    } else {
      this.enableButton();
    }
  };
  
  _setEventListeners() {    
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };
  
  clearValidationErrors() {
    this._inputList.forEach((inputElement) => this._hideInputError(inputElement));
  }

  enableValidation() {    
    this._toggleButtonState();
    this._setEventListeners();
  }
}