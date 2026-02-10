const ham = document.querySelector(".ham");
const closeBtn = document.querySelector(".close");
const navItems = document.querySelector(".nav-items");

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

const openBtn = document.querySelector(".book-now");
const container = document.querySelector(".container");
const card1 = document.querySelector(".card");
const login = document.querySelector(".login");
const card2 = document.querySelector(".second-card");
openBtn.addEventListener("click", () => {
  container.classList.add("hidden");
  card1.classList.add("show");
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    container.classList.remove("hidden");
    card2.classList.remove("show");
  }
});
container.addEventListener("click", (event) => {
  if (event.target === container) {
    container.classList.remove("hidden");
    card2.classList.remove("show");
  }
});
login.addEventListener("click", () => {
  card1.classList.remove("show");
  card2.classList.add("show");
});
