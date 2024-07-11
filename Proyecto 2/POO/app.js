//Permitir a los usuarios crear encuestas con opciones de respuesta. 
//Permitir a los usuarios votar en las encuestas. 
//Mostrar los resultados de las encuestas. 
//Almacenar los datos de las encuestas y los votos en una variable. 
//Almacenar los datos de las encuestas y los votos en una estructura de datos --> ??
//Las encuestas deben contener al menos 8 preguntas con opciones de respuesta. --> ??


const preguntas= []
const votos= {}

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
    let opciones = prompt("Ingrese las opciones separadas por coma (ejemplo: opcion1, opcion2, opcion3):").split(",").map(option => option.trim());
    let nuevaPregunta = new Pregunta(enunciado, opciones);
    encuestas.push(nuevaPregunta);
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

let cantidadPreguntas = prompt ("¿Cuántas preguntas desea realizar?");
let canidad = pasteInt(cantidadPreguntas);
if (cantidad >= 8) {
    for (let i = 0; i < cantidad; i++) {
        ingresarPregunta();
    }
} else {
    console.log("Por favor ingrese al menos 8 preguntas.");
} 
