import TabCard from "./TabCard.js";

export default class TabModal {
  constructor(cardData) {
    this.cardData = cardData;
    return this.render();
  }
  render() {
    const pageWrapper = document.querySelector("#page_wrapper");
    const modalBackground = document.createElement("div");
    modalBackground.setAttribute("class", "modal-background");

    const body = document.querySelector("body");

    const card = new TabCard(this.cardData);
    modalBackground.append(card);
    body.append(modalBackground);

    // const widthBefore = document.querySelector("html").getBoundingClientRect().width;

    // const body = document.querySelector("body");

    // const widthAfter = document.querySelector("html").getBoundingClientRect().width;


    return modalBackground;

  }

}