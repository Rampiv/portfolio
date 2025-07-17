import { el } from "redom";
import me from "../../assets/me.webp";

export function sectionAbout() {
  return el(
    "div.container",
    el("section.section-common.about#about", [
      el("img.about__img", { src: `${me}`, alt: "Фотография" }),
      el("div.about__skills", [
        el("div.about__title", [
          el("h2.about__title-h2", "Frontend"),
          el("span.about__title-span", "разработчик")
        ]),
        el("div.about__description", [
          el("h3.about__h3", "Мой стек:"),
          el("ul.about__list", [
            el(
              "li.about__list-item",
              "Фронтенд: HTML/CSS, JavaScript/TypeScript, React, Redux Toolkit"
            ),
            el("li.about__list-item", "Инструменты: Vite, Webpack, Gulp"),
            el(
              "li.about__list-item",
              "Тестирование: Jest, Cypress (включая e2e)"
            )
          ])
        ])
      ])
    ])
  );
}
