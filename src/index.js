import Navigo from "navigo";
import "./assets/style/style.scss";
import {
  createFavicon,
  winLoader,
  createHeader,
  createMain,
  createFooter,
  sectionAbout,
  sectionProjects,
  sectionContacts,
  projectsModal,
  addCoinContent
} from "./view.js";
import { loader, changePage } from "./animation.js";
import addEventModalBts from "./projects.js";

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
  .on("/", () => {
    main.append(sectionAbout());
  })
  .on("", () => {
    main.append(sectionAbout());
  })
  .on("/about", () => {
    main.append(sectionAbout());
  })
  .on("/projects", () => {
    main.append(sectionProjects(), projectsModal());
    const pet2DemoBtn = document.getElementById("pet2DemoBtn");
    addEventModalBts(pet2DemoBtn, addCoinContent);
  })
  .on("/contacts", () => {
    main.append(sectionContacts());
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
      case "/projects": {
        changePage({
          array: [sectionProjects(), projectsModal()],
          event: () => {
            addEventModalBts(
              document.getElementById("pet2DemoBtn"),
              addCoinContent
            );
          }
        });

        break;
      }
      case "/contacts":
        changePage(sectionContacts());
    }
  });
});
