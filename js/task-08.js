const formLogin = document.querySelector(`.login-form`);

formLogin.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  console.dir(formElements);
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    return alert(`All fields must be filled!`);
  }
  const data = {
    email,
    password,
  };
  console.log(data);
  event.currentTarget.reset();
}
