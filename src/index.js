import Navigo from "navigo";
import "./assets/style/style.scss";
import {
  createFavicon,
  winLoader,
  createHeader,
  createMain,
  createFooter,
  sectionAbout,
  sectionProjects
} from "./view.js";
import { loader, changePage } from "./animation.js";

const router = new Navigo("/");

document.querySelector("head").append(createFavicon());
document
  .querySelector("body")
  .append(winLoader(), createHeader(), createMain(), createFooter());
const main = document.querySelector("main");
const projectsLink = document.getElementById("projectsLink");
const aboutLink = document.getElementById("aboutLink");
const contactsLink = document.getElementById("contactsLink");

loader();

router
  .on("/*", () => {
    main.append(sectionAbout());
  })
  .on("/about", () => {
    main.append(sectionAbout());
  })
  .on("/projects", () => {
    main.append(sectionProjects());
  });
router.resolve();

[projectsLink, aboutLink, contactsLink].forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    router.navigate(item.getAttribute("href"));
    switch (item.getAttribute("href")) {
      case "/about":
        changePage(sectionAbout());
        break;
      case "/projects":
        changePage(sectionProjects());
        break;
      // case ("/contacts"): changePage(sectionContacts());
    }
  });
});
