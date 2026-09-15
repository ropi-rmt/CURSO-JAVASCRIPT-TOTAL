

function comenzarReloj() {
    //setInterval (ticTac(), 1000);
    setTimeout(tiempoCumplido(), 30 * 1000);
}

function tiempoCumplido() {
    alert("Game Over");
}

//me faltó definir la funcion ticTac

function gameReady() {

    let rta1 = document.getElementById("preg1");
    let rta2 = document.getElementById("preg2");
    let rta3 = document.getElementById("preg3");
    let rta4 = document.getElementById("preg4");
    let rta5 = document.getElementById("preg5");

//me faltó definir la fecha


    let respuestas = rta1.value + "<br>" + rta2.value + "<br>" + rta3.value + "<br>" + rta4.value + "<br>" + rta5.value;
    let rtaFinal = respuestas;

    //alert(rtaFinal);

    Swal.fire({
        title: "Tus Respuestas son:",
        html: rtaFinal,
        icon: "success"
    });
}
