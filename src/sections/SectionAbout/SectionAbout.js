import { el } from "redom";
import me from "../../assets/me.webp";

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
