const accordionQuestions = document.querySelectorAll(".accordion-question");

accordionQuestions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const selectedAnswer =
      event.currentTarget.parentElement.querySelector(".accordion-answer");
    const selectedIcon = event.currentTarget.querySelector(
      ".accordion-state-icon",
    );
    selectedAnswer.classList.toggle("active");

    const isOpen = selectedAnswer.classList.contains("active");

    event.currentTarget.setAttribute("aria-expanded", isOpen);

    selectedIcon.src = isOpen
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";
  });
});
