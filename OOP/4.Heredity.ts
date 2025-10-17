//* Heredity:
/* Paradigm diagrams
  + => public
  # => protected
  - => private
*/
interface PropsPersona {
  readonly dni: string;
  name: string;
  age: number;
  birthdate: Date;
}

class Persona {
  private readonly dni: string; //*  #name: string;
  private name: string;
  private age: number;
  private birthdate: Date; //*  Date is an type of object in Javascript

  // * Overloads difference : C++, Java again TypeScript
  constructor(dni: string);
  constructor(dni: string, name: string);
  constructor(dni: string, name: string, age: number);
  constructor(dni: string, name: string, age: number, birthday: Date);
  constructor(dni: string, name?: string, age?: number, birthday?: Date) {
    this.dni = dni;
    this.name = name ?? "";
    this.age = age ?? 0;
    this.birthdate = birthday ?? new Date("");
    // * The operator "??" means “if the value is null or undefined, use the right side”.
  }
  // Also we can use a interface to the props :
  // constructor(dataPerson: PropsPersona | null) {
  //   if (dataPerson) {
  //     this.dni = dataPerson.dni;
  //     this.name = dataPerson.name;
  //     this.age = dataPerson.age;
  //     this.birthdate = dataPerson.birthdate;
  //   } else {
  //     this.dni = "";
  //     this.name = "";
  //     this.age = 0;
  //     this.birthdate = new Date("");
  //   }
  // }
}

const student: Persona = new Persona("000");
const studentTwo: Persona = new Persona("001", "Carlos");
const studentThree: Persona = new Persona("002", "Mariano", 29);
const studentFour: Persona = new Persona(
  "003",
  "Lorena",
  42,
  new Date("15 - 05 - 1997")
);

// *Overloads difference
/*
 * In C++ or java , you can create difference constructor with unique signatures (BASED ON PARAMETERS TYPES AND COUNTS) 
  Person(String dni) {...} 
  Person(String dni, String name) {...}
  Person(String dni, int age) {...} 
* You can't that in typeScript
  constructor(dni: string, name: string)
  constructor(dni: string, age: number)
  * we have the same parameter count (2) but different types in the same position.
  */
/* 
* In TypeScript pretends to have overloads, but at runtime, only has one real function
  constructor(dni: string);
  constructor(dni: string, name: string);
  constructor(dni: string, name: string, age: number);
  constructor(dni: string, name?: string, age?: number) {
    * one real implementation ... 
  }
*/
