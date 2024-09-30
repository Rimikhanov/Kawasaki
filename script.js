const nav = document.querySelector(".nav");
const burgerButton = document.querySelector("#menu-toggle");
const burgerList = document.querySelector(".burger-list");
const charItems = document.querySelectorAll(".charItem-image");
const contentItem = document.querySelector(".contentItem");
const contentModals = document.querySelectorAll(".content-modal");
const closeButtons = document.querySelectorAll(".close-icon");
const BurgerLinks = document.querySelectorAll(".burger-link");
window.addEventListener("scroll", fixNav);

// бургер прокручивание
BurgerLinks.forEach(function (link, index) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(index)
    if (e.target.classList.contains("burger-link")) {
      const href = e.target.getAttribute("href");
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});
// навигация
function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
    burgerList.classList.add("active");
  } else {
    nav.classList.remove("active");
    burgerList.classList.remove("active");
  }
}

// бургер
burgerButton.addEventListener("click", function () {
  burgerList.classList.toggle("open");
});
const menu = document.getElementById("menu");

// прокручивание
document.querySelector(".nav-ul").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  }
});

// модальное
charItems.forEach(function (charItem, index) {
  charItem.addEventListener("click", function (event) {
    // Предотвращение событи1
    event.stopPropagation();
    // Закрытие всех модалов
    closeAllModals();
    // Открытие выбранного модала
    contentModals[index].classList.add("active");
  });
});

// Закрытие по кнопке
closeButtons.forEach((closeButton, index) => {
  closeButton.addEventListener("click", function (event) {
    // Предотвращение событий
    event.stopPropagation();
    contentModals[index].classList.remove("active");
  });
});

// Закрытие модала при клике вне его
contentModals.forEach((modal) => {
  modal.addEventListener("click", function (event) {
    event.stopPropagation();
    // Закрытие модала
    modal.classList.remove("active");
  });
});

// Закрытие всех модалов
function closeAllModals() {
  contentModals.forEach((modal) => {
    modal.classList.remove("active");
  });
}

// Закрытие модала при клике на область контента
document.querySelector("body").addEventListener("click", function (event) {
  closeAllModals();
});
