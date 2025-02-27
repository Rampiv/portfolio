import Navigo from "navigo";
import "./styles/style.scss";
import { eventLoader, changePage } from "./animation.js";
import {
  createFooter,
  createHeader,
  loader,
  createMain,
  modal,
  coinContent
} from "./components";

import addEventModalBts from "./projects.js";
import { ROUTES_MAP } from "./routes";

const router = new Navigo("/");

document
  .querySelector("body")
  .append(loader(), createHeader(), createMain(), createFooter());
const main = document.querySelector("main");
const projectsLink = document.getElementById("projectsLink");
const aboutLink = document.getElementById("aboutLink");
const contactsLink = document.getElementById("contactsLink");

eventLoader();

router
  .on(ROUTES_MAP.default.href, () => {
    main.innerHTML = "";
    main.append(ROUTES_MAP.default.component());
  })
  .on(ROUTES_MAP.about.href, () => {
    main.innerHTML = "";
    main.append(ROUTES_MAP.about.component());
  })
  .on(ROUTES_MAP.projects.href, () => {
    main.innerHTML = "";
    main.append(ROUTES_MAP.projects.component(), modal());
    const pet2DemoBtn = document.getElementById("pet2DemoBtn");
    addEventModalBts(pet2DemoBtn, coinContent);
  })
  .on(ROUTES_MAP.contacts.href, () => {
    main.innerHTML = "";
    main.append(ROUTES_MAP.contacts.component());
  });
router.resolve();

[projectsLink, aboutLink, contactsLink].forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    router.navigate(item.getAttribute("href"));
    switch (item.getAttribute("href")) {
      case ROUTES_MAP.about.href:
        changePage(ROUTES_MAP.default.component());
        break;
      case ROUTES_MAP.projects.href: {
        changePage({
          array: [ROUTES_MAP.projects.component(), modal()],
          event: () => {
            addEventModalBts(
              document.getElementById("pet2DemoBtn"),
              coinContent
            );
          }
        });

        break;
      }
      case ROUTES_MAP.contacts.href:
        changePage(ROUTES_MAP.contacts.component());
    }
  });
});
