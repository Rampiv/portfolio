import { el } from "redom";
export function createFooter() {
  return el(
    "footer",
    el("div.container", el("div.footer", el("span.footer__span", "2024")))
  );
}
