const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "/Reviews/images/person-1.jpg",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed corporis doloribus inventore, alias numquam sint dicta quaera voluptatum assumenda doloremque adipisci perferendis at suscipit necessitatibus! Quisquam ea perferendis amet nisi.",
  },
  {
    id: 2,
    name: "jhon smith",
    job: "web desinger",
    img: "/Reviews/images/person-2.jpg",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed corporis doloribus inventore, alias numquam sint dicta quaera voluptatum assumenda doloremque adipisci perferendis at suscipit necessitatibus! Quisquam ea perferendis amet nisi.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "/Reviews/images/person-3.jpg",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed corporis doloribus inventore, alias numquam sint dicta quaera voluptatum assumenda doloremque adipisci perferendis at suscipit necessitatibus! Quisquam ea perferendis amet nisi.",
  },
  {
    id: 4,
    name: "ana jones",
    job: "software engineer",
    img: "/Reviews/images/person-4.jpg",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed corporis doloribus inventore, alias numquam sint dicta quaera voluptatum assumenda doloremque adipisci perferendis at suscipit necessitatibus! Quisquam ea perferendis amet nisi.",
  },
];

//select items
const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementsByClassName("info");

//select buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load intial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

//show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
}

//next item
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//prev item
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//random item
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
