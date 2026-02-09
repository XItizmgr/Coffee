const openBtn = document.querySelector(".book-now");
const container = document.querySelector(".container");
const ham = document.querySelector(".ham");
const closeBtn = document.querySelector(".close");
const navItems = document.querySelector(".nav-items");
const login = document.querySelector(".login");
const container2 = document.querySelector(".container2");
openBtn.addEventListener("click", () => {
  container.classList.add("show");
});
login.addEventListener("click", (event) => {
  container2.classList.add("show");
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    container.classList.remove("show");
  }
});
container.addEventListener("click", (event) => {
  if (event.target === container) {
    container.classList.remove("show");
  }
});
ham.addEventListener("click", () => {
  navItems.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navItems.classList.remove("active");
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navItems.classList.remove("active");
  }
});
