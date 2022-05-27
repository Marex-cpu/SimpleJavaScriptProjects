//select items
const contentContainer = document.querySelector(".content-container");
const tabBtns = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".wrapper");

contentContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    tabBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
