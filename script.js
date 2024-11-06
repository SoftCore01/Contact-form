let button = document.querySelector("button");
let firstNameElement = document.getElementById("first-name");
let lastNameElement = document.getElementById("last-name");
let emailElement = document.getElementById("email");
let radioChoice = [
  document.getElementById("general-inquiry"),
  document.getElementById("support-request")
];
let messageElement = document.getElementById("message");
let consentElement = document.getElementById("consent");

//COLORS
let red = "hsl(0, 66%, 54%)";

button.addEventListener("click", function () {
    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let email = emailElement.value;
    let queryType = radioChoice[0].checked || radioChoice[1].checked ? true : false;
    let message = messageElement.value;
    let isConsent = consentElement.checked;
    let firstElement = ".first";
    nameHandler(firstName, firstElement);
    nameHandler(lastName, ".last");
    emailHandler(email, ".email");
    isChecked(queryType, ".query-type", "Please choose a query type");
    nameHandler(message, ".message");
    isChecked(isConsent, ".consent", "To submit this form, please consent to being contacted");
    
    /* console.log(
        firstName,lastName,email,radioChoice[0],radioChoice[1],
        message, isConsent
    ); */
});

function nameHandler(value,element) {
  let Element = document.querySelector(element);
  if (Element.lastElementChild.textContent === "This field is required") {
    return;
  } else if (value === "") {
    Element.innerHTML += `<p class="error">This field is required</p>`;
    Element.style.borderColor = red;
  }
};

function emailHandler(value, element) {
    const validRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    let Element = document.querySelector(element);
    if (Element.lastElementChild.textContent === "Please enter a valid email") {
      return;
    } else if (!value.match(validRegex)) {
      Element.innerHTML += `<p class="error">Please enter a valid email</p>`;
      Element.style.borderColor = red;
    }
};

function isChecked(value, element, warning) {
    let Element = document.querySelector(element);
    if (Element.lastElementChild.textContent === warning) {
      return;
    } else if (!value) {
      Element.innerHTML += `<p class="error">${warning}</p>`;
    };
}
