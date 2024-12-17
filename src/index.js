import "./assets/css/style.scss"

import { winLoader, createHeader, main  } from "./view.js";
import { loader } from './animation.js'

document.querySelector("body").append(winLoader(), createHeader(), main());
loader()
