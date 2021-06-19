const d = document
let x = 0,
    y = 0

export function moverPelota(e, campo, pelota) {
    const $campo = d.querySelector(campo),
        $pelota = d.querySelector(pelota)

    //Solucionando el problema de que se escapa del espacio getBoundingClientRect()

    let limitePelota = $pelota.getBoundingClientRect(),
        limiteCampo = $campo.getBoundingClientRect()

    switch (e.keyCode) {
        case 97: //izq a
            e.preventDefault()
            if (limitePelota.left > limiteCampo.left) x--;
            break;
        case 100: //der d
            e.preventDefault()
            x++;
            break;
        case 119: //arr w
            e.preventDefault()
            y--;
            break;
        case 115: //ab s
            e.preventDefault()
            y++;
            break;
        default:
            break;
    }
    $pelota.style.transform = `translate(${x*4}px,${y*1}px)` //'translate(-10px , 0)'
}