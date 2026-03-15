const ContactForm = document.querySelector("#contact-form");
const ContactBtn = document.querySelector(".btn-submit");
const ContactResult = document.querySelector("#contact-result");
const ham = document.querySelector(".ham");
const closeBtn = document.querySelector(".close");
const navItems = document.querySelector(".nav-items");
const body = document.querySelector("body");
const openBtn = document.querySelector(".book-now");
const container = document.querySelector(".container");
const card1 = document.querySelector(".card");
const login = document.querySelector(".login");
const card2 = document.querySelector(".second-card");
const form = document.querySelector(".register-form");
const year = document.querySelector(".upto-date");
const currentYear = new Date().getFullYear();
const navbar = document.querySelector(".nav-bar");
const scrolltop = document.querySelector(".scroll-to-top");
const order = document.querySelector(".shop-now");
const menuContainers = document.querySelectorAll(".menu-flex");
const section = document.querySelectorAll("section");
const nav_link = document.querySelectorAll(".nav-link");
const RegisterBtn = document.querySelector(".Register");
const checkbox = document.querySelector(".Checking");
const InputValue = document.querySelectorAll(".input");

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

openBtn.addEventListener("click", () => {
  container.classList.add("hidden");
  card1.classList.add("show");
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    container.classList.remove("hidden");
    card2.classList.remove("show");
    form.reset();
  }
});
container.addEventListener("click", (event) => {
  if (event.target === container) {
    container.classList.remove("hidden");
    card2.classList.remove("show");
    form.reset();
  }
});
login.addEventListener("click", () => {
  card1.classList.remove("show");
  card2.classList.add("show");
});

// carousel code
// const carousel = document.querySelector(".menu-carousel");
// carousel.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   carousel.scrollBy({
//     left: e.deltaY,
//     behavior: "smooth",
//   });
// });

// footer year update
year.textContent = `©${currentYear} Haven Roaster`;
// navbar scroll effect

window.addEventListener("scroll", () => {
  const scrollheight = window.scrollY;
  const navheight = navbar.getBoundingClientRect().height;
  if (scrollheight > navheight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  if (scrollheight > 500) {
    scrolltop.style.display = "block";
  } else {
    scrolltop.style.display = "none";
  }
});
scrolltop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

menuContainers.forEach((event) => {
  event.addEventListener("click", (event) => {
    const card = event.target.closest(".menu-card");
    if (!card) return;
    card1.classList.add("show");
    container.classList.add("hidden");
  });
});
order.addEventListener("click", (e) => {
  e.preventDefault();
  card1.classList.add("show");
  container.classList.add("hidden");
});

// nav-active state
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      nav_link.forEach((link) => {
        link.classList.toggle(
          "nav-active",
          link.getAttribute("href") === `#${id}`,
        );
      });
    });
  },
  { threshold: 0.6 },
);
section.forEach((observe) => observer.observe(observe));

// login from localData

RegisterBtn.addEventListener("click", (e) => {
  let data = {};
  e.preventDefault();
  const InputValuecheck = [...InputValue].every(
    (input) => input.value.trim() !== "",
  );
  if (!InputValuecheck) {
    alert("Fill all fields");
    return;
  }
  InputValue.forEach((input) => {
    data[input.id] = input.value.trim();
  });
  if (data.password !== data["confirm-password"] || !checkbox.checked) {
    alert("Password not match or checkbox not checked");
    return;
  }
});

// Contact form logic

ContactForm.addEventListener("submit", async (e) => {
  console.log("Form submission intercepted!");
  e.preventDefault();
  const formData = new FormData(ContactForm);
  const ContactBtn = ContactForm.querySelector('button[type="submit"]');
  const originalText = ContactBtn.innerHTML;
  ContactBtn.disabled = true;
  ContactBtn.innerHTML = "Sending...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      ContactResult.textContent = "Success! Message sent.";
      ContactResult.style.color = "green";
      ContactForm.reset();
      setTimeout(() => {
        ContactResult.textContent = "";
        ContactResult.style.color = "";
      }, 3000);
    } else {
      ContactResult.textContent = data.message || "Submission failed.";
      ContactResult.style.color = "red";
      setTimeout(() => {
        ContactResult.textContent = "";
        ContactResult.style.color = "";
      }, 3000);
    }
  } catch (error) {
    ContactResult.textContent = "Network error occurred.";
    ContactResult.style.color = "red";
  } finally {
    ContactBtn.disabled = false;
    ContactBtn.innerHTML = originalText;
  }
});
