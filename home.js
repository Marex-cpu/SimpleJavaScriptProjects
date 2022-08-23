//preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  this.setTimeout(() => {
    preloader.classList.add("hide-preloader");
  }, 1000);
});

//sections
const section = [
  {
    number: 1,
    nameProject: "Color Flipper",
    link: "/ColorFlipper/main.html",
    img: "/images/colorflipper.png",
  },
  {
    number: 2,
    nameProject: "Counter",
    link: "/Counter/app.html",
    img: "/images/counter.png",
  },
  {
    number: 3,
    nameProject: "Modal",
    link: "/Modal/app.html",
    img: "/images/modal.png",
  },
  {
    number: 4,
    nameProject: "Reviews",
    link: "/Reviews/app.html",
    img: "/images/reviews.png",
  },
  {
    number: 5,
    nameProject: "Questions",
    link: "/Questions/app.html",
    img: "/images/questions.png",
  },
  {
    number: 6,
    nameProject: "Menu",
    link: "/Menu/app.html",
    img: "/images/menu.png",
  },
  {
    number: 7,
    nameProject: "Nav",
    link: "/Nav/app.html",
    img: "/images/nav.png",
  },
  {
    number: 8,
    nameProject: "Tabs",
    link: "/Tabs/app.html",
    img: "/images/tabs.png",
  },
  {
    number: 9,
    nameProject: "Countdown",
    link: "/Countdown/app.html",
    img: "/images/countdown.png",
  },
];
const wrapper = document.querySelector(".wrapper");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayAllSections(section);
});

function displayAllSections(sectionItems) {
  let displaySection = sectionItems.map(function (item) {
    return `<section class="container">
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
