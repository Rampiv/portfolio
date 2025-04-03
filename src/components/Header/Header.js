import { el } from "redom";

export function createHeader() {
  return el(
    "header",
    el(
      "div.container",
      el("div.header", [
        el(
          "div.header__logo",
          el("a.header__link-name", "Rampiv", { href: "/portfolio" })
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
