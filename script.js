// script.js
const form = document.getElementById('contact-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const queryType = document.getElementById('query-type');
const message = document.getElementById('message');
const consent = document.getElementById('consent');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateForm()) {
    successMessage.style.display = 'block';
    form.reset();
  }
});

function validateForm() {
  let isValid = true;

  if (firstName.value.trim() === '') {
    showError(firstName, 'First Name is required');
    isValid = false;
  } else {
    showSuccess(firstName);
  }

  if (lastName.value.trim() === '') {
    showError(lastName, 'Last Name is required');
    isValid = false;
  } else {
    showSuccess(lastName);
  }

  if (email.value.trim() === '') {
    showError(email, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, 'Please enter a valid email address');
    isValid = false;
  } else {
    showSuccess(email);
  }

  if (queryType.value === '') {
    showError(queryType, 'Please select a query type');
    isValid = false;
  } else {
    showSuccess(queryType);
  }

  if (message.value.trim() === '') {
    showError(message, 'Message is required');
    isValid = false;
  } else {
    showSuccess(message);
  }

  if (!consent.checked) {
    showError(consent.parentElement, 'Please consent to being contacted');
    isValid = false;
  } else {
    showSuccess(consent.parentElement);
  }

  return isValid;
}

function showError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  small.innerText = message;
  small.style.visibility = 'visible';
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  small.style.visibility = 'hidden';
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}