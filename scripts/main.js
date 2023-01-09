import { tabData } from "./data.js";
import Tab_modal from "./Tab_modal.js";

const mainNavButtons = document.querySelectorAll(".main_navigation button");

mainNavButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // reset
    const currentModal = document.querySelector(".modal-background");
    currentModal ? currentModal.remove() : null;
    console.log(currentModal);
    // New modal
    const cardData = tabData.filter(el => btn.id === el.title);
    const modal = new Tab_modal(cardData[0]);
  });
});