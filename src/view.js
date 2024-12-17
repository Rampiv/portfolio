import { el, svg } from "redom";

export function createHeader() {
  return el("header.header",
    el("div.container",
      el("div.header__container", [
        el("div.header__logo", el("h1.text-reset.header__h1", "Rampiv")),
        el("ul.list-reset.header__nav", [
          el("li.list-reset.header__item.header__item-about",
            el("a.header__link", { href: "#about" }, "Обо мне")
          ),
          el("li.list-reset.header__item.header__item-projects",
            el("a.header__link", { href: "#projects" }, "Мои работы"
            )
          ),
          el("li.list-reset.header__item.header__item-contacts",
            el("a.header__link", { href: "#contacts" }, "Контакты")
          )
        ])
      ])
    )
  );
}

export function winLoader() {
  return el("div.loader", el("h2.text-reset.loader__h2", "Rampiv"));
}

export function main() {
  return el('main.main',
    el('div.container',
      el('section.about#about',
        [
          el('div.about__me.about__me-performance',
            [
              el('h2.text-reset.about__h2', 'Frondend',
                el('span', 'разработчик')
              ),
              el('div.about__img')
            ]
          ),
          el('div.about__me.about__me-skills',
            [
              el('span', 'я'),
              el('span', 'я'),
              el('span', 'я'),
              el('span', 'я')
            ]
          )
        ]
      )
    )
  )
}