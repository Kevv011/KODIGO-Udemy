//Variables
let textoCambiar = document.getElementById("textoCambiar");
let btnCambiar = document.getElementById("btnCambiar");
let btnRestablecer = document.getElementById("restablecer");
let audio = document.getElementById("audioAlarma");
let textoHora = document.getElementById("hora");

//Operacion de boton cambiar
btnCambiar.addEventListener("click", () => {

    setTimeout(() => {
        textoCambiar.style.color = "green";
        textoCambiar.textContent = "CAMBIADO A VERDE";
        audio.play();

    }, 1000 * 3);

});

//Operacion de boton restablecer
btnRestablecer.addEventListener("click", () => {

    textoCambiar.textContent = "YO CAMBIO DE COLOR";
    textoCambiar.style.color = "red";

});

//Funcion para obtener la hora con JS
setInterval(() => {
    let horaActual = new Date();
    let hora = String(horaActual.getHours()).padStart(2, "0");      //Añade un cero a la izquierda si la hora es menor a 10
    let minuto = String(horaActual.getMinutes()).padStart(2, "0");  //Añade un cero a la izquierda si los minutos son menores a 10
    let segundo = String(horaActual.getSeconds()).padStart(2, "0"); //Añade un cero a la izquierda si los segundos son menores a 10
    const fecha = horaActual.toLocaleDateString('es-ES');

    let mostrarHora = hora + ":" + minuto + ":" + segundo;
    textoHora.textContent = mostrarHora;

    alert(fecha);

}, 1000);