import { el } from "redom";
import coinCypress from "../../../assets/coinCypress.gif";
import coinExample from "../../../assets/coinExample.gif";

export function coinContent() {
  return el("div.modal-content-coin", [
    el("img", {
      src: `${coinExample}`,
      alt: "Preview Coin"
    }),
    el("img", {
      src: `${coinCypress}`,
      alt: "Работа Cypress"
    })
  ]);
}
