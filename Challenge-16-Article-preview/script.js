const shareButton = document.querySelector(".share-button");
const shareOptions = document.querySelector(".share-details");

shareButton.addEventListener("click", (event) => {
  shareOptions.classList.toggle("active");

  const isOpen = shareOptions.classList.contains("active");

  event.currentTarget.setAttribute("aria-expanded", isOpen);
});
