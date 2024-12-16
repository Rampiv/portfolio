import { el } from "redom";

export function createHeader() {
  return el(
    "header.header",
    el("div.container",
      el("div.header__container", [
        el("div.header__logo", el("h1.text-reset.logo__h1", "Rampiv")),
        el("ul.header__nav", [
          el("li.list-reset.header__item",
            el("a.header__link", { href: "#about" }, "Обо&nbsp;мне")
          ),
          el("li.list-reset.header__item",
            el("a.header__link",
              { href: "#projects" },
              "Мои&nbsp;работы"
            )
          ),
          el("li.list-reset.header__item",
            el("a.header__link", { href: "#contacts" }, "Контакты")
          )
        ])
      ])
    )
  );
}

// <main class="main">
//     <div class="container">
//         <div class="main__section" id="mainSection">
//             <div class="main__text-container flex">
//                 <h1 class="main__h1 text-reset">Это мое небольшое<br>портфолио</h1>
//                 <div class="main__text-block box flex">
//                     <p class="main__text main__text_margin text-reset">Вы можете наслаждаться минимализмом, а можете
//                         начать со вкладки "Обо мне".</p>
//                     <p class="main__text main__text_fontweight text-reset">Во всяком случае, спасибо, что зашли
//                         сюда.</p>
//                         <img src="./img/red-heart-svgrepo-com.svg" class="main__text-img heart">
//                 </div>
//                 <div class="main__interactive-block flex">
//                     <div class="main__interactive-image">

//                     </div>
//                     <h3 class="text-reset main__interactive-text">
//                         Нажмите на конверт, которая поможет вам принять решение
//                     </h3>
//                 </div>
//             </div>
//         </div>
//     </div>
// </main>
