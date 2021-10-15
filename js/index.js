// TODO: Validations
// Your users should be able to:

// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Receive an error message when the `form` is submitted if:
//   - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
//   - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*
const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const emailId = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", getFormData);

function getFormData(e) {
  e.preventDefault();
  if (firstName.value === "") {
    showError(firstName, "First name cannot be empty");
  } else {
    showSuccess(firstName);
  }
  if (lastName.value === "") {
    showError(lastName, "Last name cannot be empty");
  } else {
    showSuccess(lastName);
  }
  if (emailId.value === "") {
    showError(emailId, "Email cannot be empty");
  } else if (validateEmail()) {
    showSuccess(emailId);
  } else {
    showError(emailId, "Looks like this is not an email");
  }
  if (password.value === "") {
    showError(password, "Password cannot be empty");
  } else {
    showSuccess(password);
  }
}

function showError(element, message) {
  const small = element.nextElementSibling;
  small.innerText = message;
  small.style.display = "block";
  element.classList.add("error");
}

function showSuccess(element) {
  const small = element.nextElementSibling;
  small.innerText = "";
  small.style.display = "none";
  element.classList.remove("error");
}

function validateEmail() {
  // Got this from internet
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(emailId.value)) {
    return true;
  }
  return false;
}
