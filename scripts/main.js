import { tabData } from "./data.js";
import TabModal from "./TabModal.js";

const mainNavButtons = document.querySelectorAll(".main_navigation button");

mainNavButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // reset
    const currentModal = document.querySelector(".modal-background");
    currentModal ? currentModal.remove() : null;
    // New modal
    const cardData = tabData.filter(el => btn.id === el.title);
    const modal = new TabModal(cardData[0]);
  });
});