import { gsap } from "gsap";

export function eventLoader() {
  const headerTimeLine = gsap.timeline({ paused: true });
  let width = window.innerWidth;
  const height = window.innerHeight - 94;
  const isMobile = width < 700;
  if (width > 1920) {
    width = 1920;
  }

  headerTimeLine
    .fromTo(".loader", { opacity: 0 }, { opacity: 1, duration: 0.25 })
    .fromTo(".loader", { y: 0 }, { y: -(height / 2), duration: 0.25 })
    .to(".loader", { width, x: -((width - 199) / 2), duration: 0.25 });

  if (!isMobile) {
    headerTimeLine.to(".loader__h2", {
      x: -((width - 247.5) / 2),
      duration: 0.25
    });
  }
  headerTimeLine
    .to(".header", { opacity: 1, duration: 0.25 })
    .to(".loader", { display: "none", duration: 0 })
    .to(".header__link-name", { opacity: 1, duration: 0 })
    .to(".header__nav-item_contacts", { opacity: 1 }, "<")
    .to(".header__nav-item_about", { opacity: 1 }, "<.25")
    .to(".header__nav-item_projects", { opacity: 1 }, "<.25")
    .to("main", { opacity: 1 })
    .fromTo("footer", { y: 110 }, { y: 0 });

  window.addEventListener("load", function () {
    headerTimeLine.play();
  });
}

export function changePage(section) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const mainTimeLine = gsap.timeline({ paused: true });
  mainTimeLine
    .to("main", {
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        main.innerHTML = "";
        if (section.array) {
          const array = section.array;
          array.forEach(item => {
            main.append(item);
          });
          section.event();
        } else {
          main.append(section);
        }
      }
    })
    .to("main", { opacity: 1, duration: 0.25 });
  mainTimeLine.play();
}

export function modalOpen() {
  const modalTimeLine = gsap.timeline({ paused: true });
  modalTimeLine
    .fromTo(".modal-back", { opacity: 0 }, { opacity: 1, duration: 0.25 })
    .fromTo(".modal", { opacity: 0 }, { opacity: 1, duration: 0.25 });
  modalTimeLine.play();
}

export function modalClose() {
  const modalTimeLine = gsap.timeline({ paused: true });
  modalTimeLine
    .fromTo(".modal-back", { opacity: 1 }, { opacity: 0, duration: 0.25 })
    .fromTo(
      ".modal",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          document.querySelector(".modal-back").style.display = "none";
        }
      }
    );
  modalTimeLine.play();
}
