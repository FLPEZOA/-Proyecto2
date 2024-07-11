
//Permitir a los usuarios crear encuestas con opciones de respuesta. OK
//Permitir a los usuarios votar en las encuestas. OK
//Mostrar los resultados de las encuestas. OK
//Almacenar los datos de las encuestas y los votos en una variable. Ok
//Almacenar los datos de las encuestas y los votos en una estructura de datos -->OK
//Las encuestas deben contener al menos 8 preguntas con opciones de respuesta. --> ??

const preguntas= []
const votos= {}
const menuOpciones = ['Crear cuestionario', 'Votar', 'Ver preguntas', 'Obtener votos'];

function mostrarMenu() {
    console.log('Menú: ');
    for (let i = 0; i < menuOpciones.length; i++) {
    console.log(`${i + 1}. ${menuOpciones[i]}`)};
}

let seleccion = parseInt(prompt("Ingrese qué desea hacer: \n 1.Crear cuestionario \n 2.Ver preguntas \n 3.Votar \n 4.Obtener votos"));

if (seleccion >= 1 && seleccion <= menuOpciones.length) {
    console.log(`Ha seleccionado: ${menuOpciones[seleccion - 1]}`);
    if (seleccion === menuOpciones.length) {
        console.log('Saliendo del menú...');
    } 
    if (menuOpciones === 1) {
        cantidadPreguntas();
        ingresarPregunta();
       }
    if (seleccion === 2) {
        obtenerPreguntas();
    }
    if (menuOpciones === 3) {
    let votar = parseInt(prompt("¿En qué pregunta desea votar? "));
    voto();
    if (menuOpciones === 4) {
    obtenerRespuestas()
    }
}else {
    console.log('Opción no válida. Por favor seleccione una opción válida.');
}

function crearPregunta(enunciado, opciones) {
    preguntas.push({enunciado, opciones});
}

let cantidadPreguntas = prompt("¿Cuántas preguntas desea realizar?");
let cantidad = parseInt(cantidadPreguntas());

if (cantidad >= 8) {
    for (let i = 0; i < cantidad; i++) {
        ingresarPregunta();
    }
} else {
    console.log("Por favor ingrese al menos 8 preguntas.");
}
function ingresarPregunta() {
        let nuevaPregunta = prompt("Ingrese una nueva pregunta");
        let opciones = prompt("Ingrese las opciones separadas por coma").split(",");

if (opciones.length >= 2) {
    crearPregunta(nuevaPregunta, opciones);
} else {
    console.log("Por favor ingrese al menos dos opciones para la pregunta.");
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
   function voto(preguntaIndex, opcionIndex) {
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
}