import { el } from "redom";
import qr from "../../assets/qr.webp";

export function sectionContacts() {
  return el(
    "div.container",
    el("section.section-common.contacts#contacts", [
      el("div.contacts__list", [
        el("div.contacts__item", [
          el(
            "a.contacts__link",
            { href: "https://t.me/vanpinvan", target: "_blank" },
            [
              el("img.contacts__img", { src: `${qr}`, alt: "QR код Телеграм" }),
              el(
                "figcaption.contacts__img-description",
                "Интерактивная картинка"
              )
            ]
          )
        ])
      ])
    ])
  );
}
