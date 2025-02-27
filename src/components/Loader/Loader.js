import { el } from "redom";

export function loader() {
  return el("div.loader", el("h2.loader__h2", "Rampiv"));
}
