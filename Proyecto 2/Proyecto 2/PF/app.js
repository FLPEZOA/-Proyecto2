
const preguntas = [];

const votos = {};

const menuOpciones = ['Crear cuestionario', 'Votar', 'Ver preguntas', 'Obtener votos'];
 
function mostrarMenu() {

    console.log('Menú: ');

    for (let i = 0; i < menuOpciones.length; i++) {

        console.log(`${i + 1}. ${menuOpciones[i]}`);

    }

}
 
function crearPregunta(enunciado, opciones) {

    preguntas.push({ enunciado, opciones });

}
 
function ingresarPregunta() {

    let nuevaPregunta = prompt("Ingrese una nueva pregunta:");

    let opciones = prompt("Ingrese las opciones separadas por coma:").split(",");

    if (opciones.length >= 2) {

        crearPregunta(nuevaPregunta, opciones);

    } else {

        console.log("Por favor ingrese al menos dos opciones para la pregunta.");

    }

}
 
function cantidadPreguntas() {

    let cantidad = parseInt(prompt("¿Cuántas preguntas desea realizar?"));

    if (cantidad >= 8) {

        for (let i = 0; i < cantidad; i++) {

            ingresarPregunta();

        }

    } else {

        console.log("Por favor ingrese al menos 8 preguntas.");

    }

}
 
function obtenerPreguntas() {

    preguntas.forEach((pregunta, index) => {

        console.log(`Pregunta ${index + 1}: ${pregunta.enunciado}`);

        pregunta.opciones.forEach((opcion, i) => {

            console.log(`Opción ${i + 1}: ${opcion}`);

        });

    });

}
 
function votar() {

    let preguntaIndex = parseInt(prompt("¿En qué pregunta desea votar? (número de pregunta)")) - 1;

    let opcionIndex = parseInt(prompt("¿Cuál es su opción? (número de opción)")) - 1;

    const pregunta = preguntas[preguntaIndex];

    if (pregunta && pregunta.opciones[opcionIndex]) {

        const opcion = pregunta.opciones[opcionIndex];

        votos[opcion] = votos[opcion] ? votos[opcion] + 1 : 1;

        console.log(`Votaste por "${opcion}" en la pregunta: ${pregunta.enunciado}`);

    } else {

        console.log("Opción no válida. Por favor verifica.");

    }

}
 
function obtenerRespuestas() {

    Object.keys(votos).forEach((opcion) => {

        console.log(`Respuesta "${opcion}": ${votos[opcion]} votos`);

    });

}
 
mostrarMenu();
 
let seleccion = parseInt(prompt("Ingrese qué desea hacer: \n 1.Crear cuestionario \n 2.Votar \n 3.Ver preguntas \n 4.Obtener votos"));
 
if (seleccion >= 1 && seleccion <= menuOpciones.length) {

    console.log(`Ha seleccionado: ${menuOpciones[seleccion - 1]}`);

    if (seleccion === 1) {

        cantidadPreguntas();

    } else if (seleccion === 2) {

        obtenerPreguntas();

    } else if (seleccion === 3) {

        votar();

    } else if (seleccion === 4) {

        obtenerRespuestas();

    }

} else {

    console.log('Opción no válida. Por favor seleccione una opción válida.');

}

 