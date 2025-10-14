// unkow vs any
// a diferencia del "any" unkow tiene que si o si castearlo cuando lo vas a utilizar:

import { version } from "react";

const desconocido: unknown = "1";

const texto: string = <string>desconocido;

let text: unknown;

const metodo = (text: unknown) => {
  if (Array(text)) {
    return (<[]>text).length;
  }
};

const numeros: number[] = [1, 3, 4];
console.log(numeros.length);

// "as const" , declaras que solo los objetos son "readonly"
// Ejemplo 1:
const myArray = [1, 2, 3, "4"] as const;
myArray.push(1);
console.log(myArray.length);
// Ejemplo 2.
function getSettings() {
  return {
    modo: "prod",
    version: "1.0.1",
    opciones: {
      depuracion: true,
    },
  } as const;
}

const configuracion = getSettings();
configuracion.opciones.depuracion = false;
