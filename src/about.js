import Icon from "./eggplant-icon.svg";
import "./style.css";

const aboutLink = document.createElement("header");
const title = document.createElement("h1");
title.innerText = "About Us";
const aboutUs = document.createElement("p");
aboutUs.innerText =
  "Yo no sabia que el azul manana es vago espectro del brumoso ayer, que agitado por soplos de centurias el corazon anhela arder. Siento su flujo y su cadencia, y cuando quiere sus luces encender. Pero la vida esta llamando y ya no es hora de aprender.";
aboutLink.appendChild(title);
aboutLink.appendChild(aboutUs);

export default aboutLink;
