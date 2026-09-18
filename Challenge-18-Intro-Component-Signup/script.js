const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const checkInputValidity = (inputElement) => {
  const isInvalid = !inputElement.checkValidity();

  inputElement.setAttribute("aria-invalid", String(isInvalid));

  if (isInvalid) {
    inputElement.setAttribute("aria-describedby", `${inputElement.id}-error`);
  } else {
    inputElement.removeAttribute("aria-describedby");
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    checkInputValidity(input);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    checkInputValidity(input);
  });
});
