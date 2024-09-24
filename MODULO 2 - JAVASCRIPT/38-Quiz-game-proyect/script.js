//Variables con elmentos del DOM
const pregunta1 = document.querySelector("#Q1").value.toLowerCase().trim();
const pregunta2 = document.querySelector("#Q2").value.toLowerCase().trim();
const pregunta3 = document.querySelector("#Q3").value.toLowerCase().trim();
const pregunta4 = parseInt(document.querySelector("#Q4").value.toLowerCase().trim());
const pregunta5 = document.querySelector("#Q5").value.toLowerCase().trim();
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const timer = document.querySelector("#timer");
const audio = document.querySelector("#audio");
const form = document.querySelector("#form");

//TEMPORIZADOR
window.onload = temporizador; //Al reiniciar navegador seempieza el temporizador

function temporizador() { //Funcion del temporizador

    let tiempo = 30;

    const tempo = setInterval( () => {
        tiempo--;
        timer.textContent = tiempo;

        if (tiempo <= 0) {
            audio.play();         //Reproduce el audio
            clearTimeout(tempo);  //Limpiar el intervalo de tiempo
            alert("Se acabó el tiempo");
        }
    }, 1000);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let puntos = 0;

    if (pregunta1 == "vaticano") {
        puntos=1;
    }
    if (pregunta2 == "ottawa") {
        puntos+=1;
    }
    if (pregunta3 == "antimateria") {
        puntos+=1;
    }
    if (pregunta4 == 927) {
        puntos+=1;
    }
    if (pregunta5 == "obama") {
        puntos+=1;
    }

    alert("Obtuvistes " + puntos + " puntos");
    
});

function mostrarMensaje(msj) {
    return 
    mensaje = msj;
}
let msj = "Hola";
console.log(mostrarMensaje(msj));

