function dibujarCanvas() {
    tablero.LineWidth = 8;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0, 0, 1200, 860);
    tablero.beginPath();
    tablero.moveTo(650, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea() {
    tablero.LineWidth = 6;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {

        tablero.moveTo(500 + (anchura * i), 640);
        tablero.lineTo(550 + (anchura * i), 640);
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index) {
    tablero.font = "bold 63px Inter";
    tablero.LineWidth = 6;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#F3F5F6";

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 505+(anchura*index),620);
    tablero.stroke()

}