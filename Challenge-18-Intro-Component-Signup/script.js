const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.setAttribute("aria-invalid", String(!input.checkValidity()));
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    input.setAttribute("aria-invalid", String(!input.checkValidity()));
  });
});
