import { modalOpen, modalClose } from "./animation";

function addEventModalBts(btn, content) {
  const modalBack = document.querySelector(".modal-back");
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector(".modal-close");
  btn.addEventListener("click", () => {
    modalBack.style.display = "block";
    modalOpen();
    const thisContent = content();
    if (modal.children.length === 1) {
      modal.append(thisContent);
    }
  });

  modalCloseBtn.addEventListener("click", () => {
    modalClose();
  });
  document.addEventListener("click", e => {
    if (!e.target.contains(modalBack)) {
      return;
    } else {
      modalClose();
    }
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      e.stopPropagation();
      modalClose();
    }
  });
}

export default addEventModalBts;
