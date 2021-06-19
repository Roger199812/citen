const d = document,
    w = window


export function actionButtons(darkButton, upButton) {
    const $dark = d.querySelector(darkButton),
        $up = d.querySelector(upButton)
    let lista = (d.querySelectorAll("[data-modo]"))

    w.addEventListener("scroll", () => {
        if (w.scrollY > 600) {
            $up.classList.add("visible")
        } else {
            $up.classList.remove("visible")
        }
    })

    d.addEventListener("DOMContentLoaded", () => {
        let modo
        modo = localStorage.modo
        if (modo === "light") {
            lista.forEach(el => el.classList.remove("darkMode"))
            $dark.textContent = "🌙"
            w.localStorage.setItem("modo", "light")
        } else {
            lista.forEach(el => el.classList.add("darkMode"))
            $dark.textContent = "🌞"
            w.localStorage.setItem("modo", "dark")
        }

    })

    d.addEventListener("click", (e) => {
        if (e.target.matches(darkButton)) {
            if ($dark.textContent === "🌞") {
                lista.forEach(el => el.classList.remove("darkMode"))
                $dark.textContent = "🌙"
                w.localStorage.setItem("modo", "light")
            } else {
                lista.forEach(el => el.classList.add("darkMode"))
                $dark.textContent = "🌞"
                w.localStorage.setItem("modo", "dark")
            }
        }
        if (e.target.matches(upButton)) {
            w.scrollTo({ behavior: "smooth", top: 0 })
        }
    })

}