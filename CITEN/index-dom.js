import { actionButtons } from "./js/botones.js";
import hamburgerMenu from "./js/menu_hamburguesa.js";
import { moverPelota } from "./js/pelotita.js";
import { digitalClock, alarm } from "./js/reloj.js"
import { testerPage } from "./js/tester.js";

const d = document

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarm("#activar-alarma", "#desactivar-alarma")
    testerPage("#tester")


})

d.addEventListener("keypress", (e) => {
    moverPelota(e, ".campo", ".bola")
})

//actionButtons(".darkButtom", ".upButtom")