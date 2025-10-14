const sumar = (a: number): number => a + 1;

console.log(sumar(2));

class Person {
  name: string;
  // private name: string;
  // #name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

interface IPersonable {
  name: string;
  getName(): string;
  setName(name: string): void;
}

// const persona: Person = new Person("Carlos");

// const posiblePerson: IPersonable = persona;
//// IPersonable and Person have the same shape. (variables, fuctions)
// console.log(posiblePerson);

// Transpilacion/transpilar -> yo tengo un lenguaje de alto nivel y lo transformo a otro lenguaje de alto nivel.
// ES -> conjunto de personas que establecen una reglas,

// Inferir ->
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// enum es un tipado, en donde usamor las propiedades como parametros.

// UNION Y INTERSECCION
interface Alunno {
  nombre: string;
  nota: number;
}

interface Profesor {
  nombre: string;
  legajo: string;
}

// union
type AlumnoUProfesor = Alunno | Profesor; // son elementos que se COMPARTEN entre string y number.
// interseccion:
type AlumnoYProfesor = Alunno & Profesor; // son elementos que se SUMAN entre string y number.

// Hay diferencias cuando creamos y usamos las interfaces:
const persona: AlumnoUProfesor = {
  nombre: "Carlos",
  nota: 10,
};

//

const metodo = (persona: AlumnoUProfesor): void => {
  persona.nombre;
};
