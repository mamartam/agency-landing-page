const navContainer = document.querySelector(".nav-container");
const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener("click", () => {
  navContainer.classList.toggle("open");
});
