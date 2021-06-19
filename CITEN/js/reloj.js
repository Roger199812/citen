const d = document;
let $audio = d.createElement("audio")
$audio.src = "./assets/alarma.mp3"
export function digitalClock(clock, play, stop) {
    let intervalo
    d.addEventListener("click", e => {
        if (e.target.matches(play)) {
            intervalo = setInterval(() => {
                let fecha = new Date().toLocaleTimeString()
                    //let hora = fecha.getHours() + ":" + ("0" + fecha.getMinutes()).slice(-2) + ":" + ("0" + fecha.getSeconds()).slice(-2)
                d.querySelector(clock).innerHTML = `<h2>${fecha}</h2>`
            }, 1000);
            e.target.disabled = true
        }
        if (e.target.matches(stop)) {
            clearInterval(intervalo);
            d.querySelector(clock).innerHTML = null
            d.querySelector(play).disabled = false
        }
    })
}

export function alarm(start, end) {
    d.addEventListener("click", e => {

        if (e.target.matches(start)) {
            $audio.play()
            e.target.disabled = true
        }
        if (e.target.matches(end)) {
            $audio.pause()
            d.querySelector(start).disabled = false
        }
    })
}