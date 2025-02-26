import { el } from "redom";
// Импорты картинок
import sitDownPls from "./assets/img/sitDownPls.webp";
import favicon from "./assets/img/favicon.png";
import me from "./assets/img/me.webp";
import qr from "./assets/img/qr.webp";
import coinPrewiev from "./assets/img/coinPrewiev.webp";
import coinCypress from "./assets/img/coinCypress.gif";
import coinExample from "./assets/img/coinExample.gif";
import highpassPrewiev from "./assets/img/highpassPrewiev.webp";

export function createFavicon() {
  return el("link", { rel: "icon", type: "image/png", href: `${favicon}` });
}
export function createHeader() {
  return el(
    "header",
    el(
      "div.container",
      el("div.header", [
        el(
          "div.header__logo",
          el("a.header__link-name", "Rampiv", { href: "./" })
        ),
        el("ul.header__nav", [
          el(
            "li.header__nav-item.header__nav-item_projects",
            el(
              "a.header__link",
              { href: "/projects", id: "projectsLink" },
              "Мои работы"
            )
          ),
          el(
            "li.header__nav-item.header__nav-item_about",
            el("a.header__link", { href: "/about", id: "aboutLink" }, "Обо мне")
          ),
          el(
            "li.header__nav-item.header__nav-item_contacts",
            el(
              "a.header__link",
              { href: "/contacts", id: "contactsLink" },
              "Контакты"
            )
          )
        ])
      ])
    )
  );
}
export function createMain() {
  return el("main");
}
export function createFooter() {
  return el(
    "footer",
    el("div.container", el("div.footer", el("span.footer__span", "2024")))
  );
}
export function winLoader() {
  return el("div.loader", el("h2.loader__h2", "Rampiv"));
}
export function sectionAbout() {
  return el(
    "div.container",
    el("section.section-common.about#about", [
      el("img.about__img", { src: `${me}`, alt: "Фотография" }),
      el("div.about__skills", [
        el("div.about__skills-title", [
          el("h2.about__skills-h2", "Frontend"),
          el("span.about__skills-span", "разработчик")
        ]),
        el("div.about__skills-description", [
          el("span", "HTML5, SCSS3"),
          el("span", "FLEX, GRID"),
          el("span", "Bootstrap"),
          el("span", "JavaScript, TypeScript"),
          el("span", "React"),
          el("span", "Jest, Cypress"),
          el("span", "Git, GitHub"),
          el("span", "Gulp"),
          el("span", "Webpack"),
          el("span", "gsap, redom")
        ])
      ])
    ])
  );
}
export function sectionProjects() {
  return el(
    "div.container",
    el("section.section-common.projects#projects", [
      el("h1.h1-common.projects__h1", "Мои работы"),
      el("div.projects__list", [
        el("div.card-common.projects__item", [
          el("img.projects__item-img", {
            src: `${sitDownPls}`,
            alt: "Preview работы"
          }),
          el("div.projects__item-content", [
            el("h2.projects__item-h2", "Магазин мебели: SitDownPls"),
            el("p.projects__item-stack", "html, scss, js, gulp"),
            el("a.projects__item-link", "Переход на сайт", {
              href: "https://rampiv.github.io/pet-1-page/",
              target: "_blank"
            }),
            el("a.projects__item-link", "GitHub", {
              href: "https://github.com/Rampiv/Pet-1",
              target: "_blank"
            })
          ])
        ]),
        el("div.card-common.projects__item", [
          el("img.projects__item-img.projects__item-img_2", {
            src: `${coinPrewiev}`,
            alt: "Preview работы"
          }),
          el("div.projects__item-content", [
            el("h2.projects__item-h2", "Банковское приложение: Coin"),
            el("p.projects__item-stack", "html, scss, js, webpack, cypress"),
            el("a.projects__item-link", { id: "pet2DemoBtn" }, "Демонстрация"),
            el("a.projects__item-link", "GitHub", {
              href: "https://github.com/Rampiv/pet-2-coin",
              target: "_blank"
            })
          ])
        ]),
        el("div.card-common.projects__item", [
          el("img.projects__item-img", {
            src: `${highpassPrewiev}`,
            alt: "Preview работы"
          }),
          el("div.projects__item-content", [
            el("h2.projects__item-h2", "Студия: High pass"),
            el("p.projects__item-stack", "html, scss, js, gulp"),
            el("a.projects__item-link", "Переход на сайт", {
              href: "https://rampiv.github.io/pet-3-page/",
              target: "_blank"
            }),
            el("a.projects__item-link", "GitHub", {
              href: "https://github.com/Rampiv/pet-3-highpass",
              target: "_blank"
            })
          ])
        ])
      ])
    ])
  );
}
export function sectionContacts() {
  return el(
    "div.container",
    el("section.section-common.contacts#contacts", [
      el("div.contacts__list", [
        el("div.contacts__item", [
          el(
            "a.contacts__link",
            { href: "https://t.me/vanpinvan", target: "_blank" },
            [
              el("img.contacts__img", { src: `${qr}`, alt: "QR код Телеграм" }),
              el(
                "figcaption.contacts__img-description",
                "Интерактивная картинка"
              )
            ]
          )
        ])
      ])
    ])
  );
}
export function projectsModal() {
  return el(
    "div.modal-back",
    el("div.modal", el("a.modal-close", { href: "#" }, "Закрыть"))
  );
}

export function addCoinContent() {
  return el("div.modal-content-coin", [
    el("img", {
      src: `${coinExample}`,
      alt: "Preview Coin"
    }),
    el("img", {
      src: `${coinCypress}`,
      alt: "Работа Cypress"
    })
  ]);
}
