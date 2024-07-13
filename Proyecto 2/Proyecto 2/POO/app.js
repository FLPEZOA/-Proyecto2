const preguntas = [];
const votos = {};

class Pregunta {
    constructor(enunciado, opciones) {
        this.enunciado = enunciado;
        this.opciones = opciones;
        this.respuestas = [];
    }

    votar(respuesta) {
        this.respuestas.push(respuesta);
    }
}

function ingresarPregunta() {
    let enunciado = prompt("Ingrese la nueva pregunta:");
    let opciones = prompt("Ingrese las opciones separadas por coma:").split(",").map(option => option.trim());
    let nuevaPregunta = new Pregunta(enunciado, opciones);
    preguntas.push(nuevaPregunta);
}

function mostrarPreguntas() {
    preguntas.forEach((pregunta, index) => {
        console.log(`Pregunta ${index + 1}: ${pregunta.enunciado}`);
        pregunta.opciones.forEach((opcion, i) => {
            console.log(`Opción ${i + 1}: ${opcion}`);
        });
    });
}

function mostrarRespuestas() {
    preguntas.forEach((pregunta) => {
        console.log(`Respuestas para la pregunta "${pregunta.enunciado}":`);
        pregunta.respuestas.forEach((respuesta, i) => {
            console.log(`Respuesta ${i + 1}: ${respuesta}`);
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    let cantidadPreguntas = prompt("¿Cuántas preguntas desea realizar?");
    let cantidad = parseInt(cantidadPreguntas);

    if (cantidad >= 8) {
        for (let i = 0; i < cantidad; i++) {
            ingresarPregunta();
        }
        mostrarPreguntas(); // Mostrar las preguntas después de ingresarlas
    } else {
        console.log("Por favor ingrese al menos 8 preguntas.");
    }
});
