import "./style.css";
import header from "./first-load";
import aboutLink from "./about";
import menuLink from "./menu";
import reservLink from "./reservations";

const navbar = document.createElement("nav");
const home = document.createElement("a");
home.innerText = "Home";
home.addEventListener("click", () => handleNavClick("home"));

const about = document.createElement("a");
about.innerText = "About";
about.addEventListener("click", () => handleNavClick("about"));
const menu = document.createElement("a");
menu.innerText = "Menu";
menu.addEventListener("click", () => handleNavClick("menu"));
const reservations = document.createElement("a");
reservations.innerText = "Reservations";
reservations.addEventListener("click", () => handleNavClick("reservations"));

navbar.appendChild(home);
navbar.appendChild(about);
navbar.appendChild(menu);
navbar.appendChild(reservations);
const nav = document.querySelector(".navbar");
nav.appendChild(navbar);

const content = document.querySelector(".content");
content.appendChild(header);

function handleNavClick(link) {
  content.removeChild(content.firstChild);
  if (link == "home") {
    content.appendChild(header);
  }
  if (link == "about") {
    content.appendChild(aboutLink);
  }
  if (link == "menu") {
    content.appendChild(menuLink);
  }
  if (link == "reservations") {
    content.appendChild(reservLink);
  }
}
