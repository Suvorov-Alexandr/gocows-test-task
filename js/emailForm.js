'use srtict';

const form = document.querySelector('.email-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const formData = {};
  const {
    elements: { email },
  } = event.currentTarget;

  if (email.value === '') {
    alert('Все поля должны быть заполнены!');
    return;
  }

  const formValue = new FormData(this);
  formValue.forEach((value, name) => {
    formData[name] = value;
  });
  console.log(formData);
  form.reset();
}

const button = document.querySelector('.load');

button.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
