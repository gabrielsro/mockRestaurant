import Icon from "./eggplant-icon.svg";

const header = document.createElement("header");

const title = document.createElement("h1");
title.innerText = "The Eggplant";

const logo = new Image();
logo.src = Icon;

const description = document.createElement("p");
description.innerText =
  "Welcome to The Eggplant, we're a 100% vegan restaurant offering a wide variety of veganized dishes from around the world. This is The Eggplant!";

const moreDescription = document.createElement("p");
moreDescription.innerText = "Estamos dddddddisparados bebe";

header.appendChild(title);
header.appendChild(logo);
header.appendChild(description);
header.appendChild(moreDescription);

export default header;
