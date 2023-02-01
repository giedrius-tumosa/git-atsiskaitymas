export default class TabCard {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    // General card layout
    const card = document.createElement("article");
    card.setAttribute("class", "tabCard");

    const cardHeader = document.createElement("header");
    cardHeader.setAttribute("class", "cardHeader");

    const cardMain = document.createElement("main");
    cardMain.setAttribute("class", "cardMain");

    card.append(cardHeader, cardMain);

    // Header elements
    const cardTitle = document.createElement("h2");
    cardTitle.setAttribute("class", "cardTitle");

    if (this.props.title) {
      const text = document.createTextNode(this.props.title);
      cardTitle.append(text);
    }

    const cardExitButton = document.createElement("div");
    cardExitButton.setAttribute("class", "cardExitButton");

    let img = document.createElement("img");
    img.setAttribute("src", "../images/xmark-solid.svg");
    img.setAttribute("alt", "Exit button image.");
    img.setAttribute("width", "30");
    img.setAttribute("height", "30");
    cardExitButton.append(img);

    cardHeader.append(cardTitle, cardExitButton);

    // Main elements

    if (this.props.mediaUrl) {
      let media;
      if (this.props.mediaType === "image") {
        media = document.createElement("figure");
        media.setAttribute("class", "cardMedia");
        img = document.createElement("img");
        img.setAttribute("src", this.props.mediaUrl);  //depends on type
        img.setAttribute("alt", "Exit button image.");
        img.setAttribute("width", "580");
        img.setAttribute("height", "auto");
        media.append(img);
      }
      if (this.props.mediaType === "video") {
        media = document.createElement("figure");
        media.setAttribute("class", "cardMedia");
        const video = document.createElement("video");
        video.setAttribute("class", "cardVideo");
        video.setAttribute("autoplay", "autoplay");
        video.setAttribute("width", 200);
        video.setAttribute("height", "auto");
        media.append(video);

        const source = document.createElement("source");
        source.setAttribute("src", this.props.mediaUrl);
        source.setAttribute("type", "video/mp4");
        const text = document.createTextNode("Your browser does not support the video.");
        video.append(source, text);
      }
      cardMain.append(media);
    }

    if (this.props.description) {
      const cardDescription = document.createElement("Description");
      cardDescription.setAttribute("class", "cardDescription");
      const text = document.createTextNode(this.props.description);
      cardDescription.append(text);
      cardMain.append(cardDescription);
    }



    // Exit button event

    cardExitButton.addEventListener("click", () => {
      const modal = document.querySelector(".modal-background");
      modal.remove();
    });

    // Return
    return card;
  }
}
