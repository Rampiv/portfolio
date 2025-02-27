import { el } from "redom";
import sitDownPls from "../../assets/sitDownPls.webp";
import coinPrewiev from "../../assets/coinPrewiev.webp";
import highpassPrewiev from "../../assets/highpassPrewiev.webp";

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
          el("img.projects__item-img.projects__item-img_2", {
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
