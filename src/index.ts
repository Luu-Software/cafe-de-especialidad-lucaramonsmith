import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalPorPersona: number = 0; 
let cuenta: number = Number(totalTexto)
let personas: number = Number(personasTexto)

if (esEstudiante === "si") {
    totalPorPersona = cuenta * 0.90 / personas 
}

else {
    totalPorPersona = cuenta / personas
}
console.log(`Total por persona: $${totalPorPersona}`);
