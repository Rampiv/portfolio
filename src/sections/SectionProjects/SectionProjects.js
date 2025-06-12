import { el } from "redom";
import sitDownPlsPreview from "../../assets/sitDownPlsPreview.webp";
import coinPreview from "../../assets/coinPreview.webp";
import highpassPreview from "../../assets/highpassPreview.webp";
import marusyaPreview from "../../assets/marusyaPreview.webp";
import rampivClickerPreview from "../../assets/rampivClickerPreview.webp";
import habitisPreview from "../../assets/habitisPreview.webp";

export function sectionProjects() {
  return el(
    "div.container",
    el("section.section-common.projects#projects", [
      el("h1.h1-common.projects__h1", "Мои работы"),
      el("div.projects__list", [
        el("div.card-common.projects__item", [
          el("img.projects__item-img.projects__item-img_2", {
            src: `${rampivClickerPreview}`,
            alt: "Preview работы"
          }),
          el("div.projects__item-content", [
            el("h2.projects__item-h2", "Кликер на реакцию"),
            el("p.projects__item-stack", "html, scss, ts, vite, react."),
            el("a.projects__item-link", "Переход на сайт", {
              href: "https://rampiv.github.io/RampivClicker/",
              target: "_blank"
            }),
            el("a.projects__item-link", "GitHub", {
              href: "https://github.com/Rampiv/RampivClicker",
              target: "_blank"
            })
          ])
        ]),
        el("div.card-common.projects__item", [
          el("img.projects__item-img.projects__item-img_2", {
            src: `${habitisPreview}`,
            alt: "Preview работы"
          }),
          el("div.projects__item-content", [
            el("h2.projects__item-h2", "Трекер привычек"),
            el("p.projects__item-stack", "html, scss, ts, vite, react."),
            el("a.projects__item-link", "Переход на сайт", {
              href: "https://rampiv.github.io/habitisforme/",
              target: "_blank"
            }),
            el("a.projects__item-link", "GitHub", {
              href: "https://github.com/Rampiv/habitisforme",
              target: "_blank"
            })
          ])
        ]),
        el("div.card-common.projects__item", [
          el("img.projects__item-img.projects__item-img_2", {
            src: `${marusyaPreview}`,
            alt: "Preview работы"
          }),
          el("div.projects__item-content", [
            el("h2.projects__item-h2", "Поиск фильмов: Маруся"),
            el("p.projects__item-stack", "html, scss, ts, react, vite"),
            el("a.projects__item-link", "Переход на сайт", {
              href: "https://rampiv.github.io/Marusya-react/",
              target: "_blank"
            }),
            el("a.projects__item-link", "GitHub", {
              href: "https://github.com/Rampiv/Marusya-react",
              target: "_blank"
            })
          ])
        ]),
        el("div.card-common.projects__item", [
          el("img.projects__item-img.projects__item-img_2", {
            src: `${highpassPreview}`,
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
        ]),
        el("div.card-common.projects__item", [
          el("img.projects__item-img", {
            src: `${sitDownPlsPreview}`,
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
            src: `${coinPreview}`,
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
        ])
      ])
    ])
  );
}
