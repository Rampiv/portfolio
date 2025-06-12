import { el } from "redom";
import sitDownPlsPreview from "../../assets/sitDownPlsPreview.webp";
import coinPreview from "../../assets/coinPreview.webp";
import highpassPreview from "../../assets/highpassPreview.webp";
import marusyaPreview from "../../assets/marusyaPreview.webp";
import rampivClickerPreview from "../../assets/rampivClickerPreview.webp";
import habitisPreview from "../../assets/habitisPreview.webp";

const projects = [
  {
    title: "Кликер на реакцию",
    img: rampivClickerPreview,
    stack: "html, scss, ts, vite, react",
    demoLink: "https://rampiv.github.io/RampivClicker/",
    githubLink: "https://github.com/Rampiv/RampivClicker",
    imgClass: "projects__item-img_2"
  },
  {
    title: "Трекер привычек",
    img: habitisPreview,
    stack: "html, scss, ts, vite, react",
    demoLink: "https://rampiv.github.io/habitisforme/",
    githubLink: "https://github.com/Rampiv/habitisforme",
    imgClass: "projects__item-img_2"
  },
  {
    title: "Поиск фильмов: Маруся",
    img: marusyaPreview,
    stack: "html, scss, ts, react, vite",
    demoLink: "https://rampiv.github.io/Marusya-react/",
    githubLink: "https://github.com/Rampiv/Marusya-react",
    imgClass: "projects__item-img_2"
  },
  {
    title: "Студия: High pass",
    img: highpassPreview,
    stack: "html, scss, js, gulp",
    demoLink: "https://rampiv.github.io/pet-3-page/",
    githubLink: "https://github.com/Rampiv/pet-3-highpass",
    imgClass: "projects__item-img_2"
  },
  {
    title: "Магазин мебели: SitDownPls",
    img: sitDownPlsPreview,
    stack: "html, scss, js, gulp",
    demoLink: "https://rampiv.github.io/pet-1-page/",
    githubLink: "https://github.com/Rampiv/Pet-1"
  },
  {
    title: "Банковское приложение: Coin",
    img: coinPreview,
    stack: "html, scss, js, webpack, cypress",
    demoLink: "#",
    githubLink: "https://github.com/Rampiv/pet-2-coin",
    demoBtnText: "Демонстрация",
    imgClass: "projects__item-img_2"
  }
];

function createProjectCard(project) {
  return el("div.card-common.projects__item", [
    el(
      `img.projects__item-img${project.imgClass ? "." + project.imgClass : ""}`,
      {
        src: project.img,
        alt: `Preview проекта ${project.title}`
      }
    ),
    el("div.projects__item-content", [
      el("h2.projects__item-h2", project.title),
      el("p.projects__item-stack", project.stack),
      el("a.projects__item-link", project.demoBtnText || "Переход на сайт", {
        href: project.demoLink,
        target: project.demoLink !== "#" ? "_blank" : null,
        id: project.demoLink === "#" ? "pet2DemoBtn" : null
      }),
      el("a.projects__item-link", "GitHub", {
        href: project.githubLink,
        target: "_blank"
      })
    ])
  ]);
}

export function sectionProjects() {
  return el(
    "div.container",
    el("section.section-common.projects#projects", [
      el("h1.h1-common.projects__h1", "Мои работы"),
      el("div.projects__list", projects.map(createProjectCard))
    ])
  );
}
