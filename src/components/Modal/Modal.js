import { el } from "redom";

export function modal() {
  return el(
    "div.modal-back",
    el("div.modal", el("a.modal-close", { href: "#" }, "Закрыть"))
  );
}
