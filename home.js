//preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  this.setTimeout(() => {
    preloader.classList.add("hide-preloader");
  }, 1000);
});

//hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const linksContainer = document.querySelector(".links-container");

let menuOpen = false;

hamburgerMenu.addEventListener("click", () => {
  linksContainer.classList.toggle("show-menu");

  if (!menuOpen) {
    hamburgerMenu.classList.add("open");
    menuOpen = true;
  } else {
    hamburgerMenu.classList.remove("open");
    menuOpen = false;
  }
});

//links container
const links = document.querySelectorAll(".link-item");
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (!menuOpen) {
      hamburgerMenu.classList.add("open");
      menuOpen = true;
    } else {
      hamburgerMenu.classList.remove("open");
      menuOpen = false;
    }
    linksContainer.classList.remove("show-menu");
  });
});

//sections
const section = [
  {
    number: 1,
    nameProject: "Color Flipper",
    link: "/ColorFlipper/main.html",
    img: "/images/colorflipper.png",
    id: "colorflipper",
  },
  {
    number: 2,
    nameProject: "Counter",
    link: "/Counter/app.html",
    img: "/images/counter.png",
    id: "counter",
  },
  {
    number: 3,
    nameProject: "Modal",
    link: "/Modal/app.html",
    img: "/images/modal.png",
    id: "modal",
  },
  {
    number: 4,
    nameProject: "Reviews",
    link: "/Reviews/app.html",
    img: "/images/reviews.png",
    id: "reviews",
  },
  {
    number: 5,
    nameProject: "Questions",
    link: "/Questions/app.html",
    img: "/images/questions.png",
    id: "questions",
  },
  {
    number: 6,
    nameProject: "Menu",
    link: "/Menu/app.html",
    img: "/images/menu.png",
    id: "menu",
  },
  {
    number: 7,
    nameProject: "Nav",
    link: "/Nav/app.html",
    img: "/images/nav.png",
    id: "nav",
  },
  {
    number: 8,
    nameProject: "Tabs",
    link: "/Tabs/app.html",
    img: "/images/tabs.png",
    id: "tabs",
  },
  {
    number: 9,
    nameProject: "Countdown",
    link: "/Countdown/app.html",
    img: "/images/countdown.png",
    id: "countdown",
  },
];
const wrapper = document.querySelector(".wrapper");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayAllSections(section);
});

function displayAllSections(sectionItems) {
  let displaySection = sectionItems.map(function (item) {
    return `<section id='${item.id}' class="container">
        <div class="line">
          <p class="number">${item.number}.</p>
          <p class="name-project">${item.nameProject}</p>
        </div>
        <article class="document">
          <a href=${item.link}>
            <img class="img" src=${item.img} alt="img-site" />
          </a>
        </article>
      </section>`;
  });
  displaySection = displaySection.join("");
  wrapper.innerHTML = displaySection;
}

//footer date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
