//SELECTORES
let palabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";


//PALABRA SECRETA

function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}


// INICIAR JUEGO

function iniciarJuego() {
    document.getElementById("iniciar-juego").style.display = "none";

    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
}