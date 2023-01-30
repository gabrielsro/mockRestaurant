import "./style.css";
import Icon from "./eggplant-icon.svg";

const menuLink = document.createElement("header");
const title = document.createElement("h1");
title.innerText = "Menu";
const aboutMenu = document.createElement("p");
aboutMenu.innerText = "Prices in USD";

menuLink.appendChild(title);
menuLink.appendChild(aboutMenu);

export default menuLink;
