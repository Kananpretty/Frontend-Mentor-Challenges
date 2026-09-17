const form = document.querySelector("form");
const input = document.querySelector(".subscriber-email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValid = input.checkValidity();
  input.setAttribute("aria-invalid", String(!isValid));
});

input.addEventListener("input", () => {
  input.setAttribute("aria-invalid", String(!input.checkValidity()));
});
