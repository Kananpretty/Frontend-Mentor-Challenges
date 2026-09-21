const form = document.querySelector("form");
const input = document.querySelector(".email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputValidity(input);
});

input.addEventListener("input", () => {
  checkInputValidity(input);
});

const checkInputValidity = (inputElement) => {
  const isValid = inputElement.checkValidity();

  inputElement.setAttribute("aria-invalid", String(!isValid));

  if (isValid) {
    inputElement.removeAttribute("aria-describedby");
  } else {
    inputElement.setAttribute("aria-describedby", `${inputElement.id}-error`);
  }
};
