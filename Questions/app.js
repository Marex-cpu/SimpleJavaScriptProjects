const questions = document.querySelectorAll(".item");

questions.forEach(function (question) {
  const btn = question.querySelector(".btn");
  console.log(btn);
  btn.addEventListener("click", function () {
    btn.classList.toggle("btn-minus");
    questions.forEach(function (item) {
      console.log(questions);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

//travesing the dom
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
