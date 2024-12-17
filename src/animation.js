import { gsap } from 'gsap'


export function loader() {
    const headerTimeLine = gsap.timeline({ paused: true })
    const height = window.innerHeight - 94;
    let width = window.innerWidth;
    if (width > 1920) {
        width = 1920
    }

    headerTimeLine
        .fromTo('.loader', { opacity: 0 }, { opacity: 1, duration: 0.25 })
        .fromTo('.loader', { y: 0 }, { y: -(height / 2), duration: 0.25 })
        .to('.loader', { width, x: -((width - 199) / 2), duration: 0.25 })
        .to('.loader__h2', { x: -((width - 247.5) / 2), duration: 0.25 })
        .to('.header__container', { opacity: 1, duration: 0.25 })
        .to('.loader', { display: 'none', duration: 0 })
        .to('.header__h1', { opacity: 1, duration: 0 })
        .to('.header__item-contacts', { opacity: 1 }, '<')
        .to('.header__item-projects', { opacity: 1 }, '<.25')
        .to('.header__item-about', { opacity: 1 }, '<.25')


    window.addEventListener("load", function () {
        headerTimeLine.play();
    });
}