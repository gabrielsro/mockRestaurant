import "./style.css";
import Icon from "./eggplant-icon.svg";

const reservLink = document.createElement("header");
const title = document.createElement("h1");
title.innerText = "Reservations";
const aboutReserv = document.createElement("p");
aboutReserv.innerText =
  "Make your reservation and forget about waiting in line";

reservLink.appendChild(title);
reservLink.appendChild(aboutReserv);

export default reservLink;
