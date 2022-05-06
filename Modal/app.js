//select items
const modalOverlay = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function openModal() {
  modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", function closeModal() {
  modalOverlay.classList.remove("open-modal");
});
