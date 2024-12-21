import { el, svg } from "redom";

export function createHeader() {
  return el("header",
    el("div.container",
      el("div.header", [
        el("div.header__logo", el("h1.header__h1", "Rampiv")),
        el("ul.header__nav", [
          el("li.header__nav-item.header__nav-item_about",
            el("a.header__link", { href: "#about" }, "Обо мне")
          ),
          el("li.header__nav-item.header__nav-item_projects",
            el("a.header__link", { href: "#projects" }, "Мои работы"
            )
          ),
          el("li.header__nav-item.header__nav-item_contacts",
            el("a.header__link", { href: "#contacts" }, "Контакты")
          )
        ])
      ])
    )
  );
}

export function winLoader() {
  return el("div.loader", el("h2.loader__h2", "Rampiv"));
}

export function main() {
  return el('main',
    el('div.container',
      el('section.about#about',
        [
          el('div.about__me.about__me-performance',
            [
              el('h2.about__me-h2', 'Frondend',
                el('span', 'разработчик')
              ),
              el('div.about__me-img')
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