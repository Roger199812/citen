const d = document,
    w = window

export function testerPage(form) {
    const $form = d.querySelector(form)
    d.addEventListener("submit", (e) => {
        let url = $form.url.value,
            ancho = $form.ancho.value,
            alto = $form.alto.value
        if (e.target === $form) {
            e.preventDefault()
                //window.open("", "", "width=200,height=100");
            w.open(url, "", `width=${ancho},height=${alto}`)
        }

    })

}