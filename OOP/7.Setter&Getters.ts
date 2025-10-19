// * Encapsulation: handle data access.
// * For that we need to define setters (written) and getters (reading)
// * They are public methods that allow us to access private variable of the class.

class Person {
  private _dni: string;

  constructor(dni: string) {
    if (!this.validateDNI(dni))
      throw new Error("Error: DNI format is not valid");
    this._dni = dni;
  }

  public getDNI(): string {
    return this._dni;
  }

  public setDNI(newDNI: string): void {
    if (!this.validateDNI(newDNI))
      throw new Error("Error: DNI format is not valid");
    this._dni = newDNI;
  }

  private validateDNI(dni: string): boolean {
    const regexp = /^\d{8}[a-zA-Z]$/;
    if (!regexp.test(dni)) return false;

    const numbers = +dni.substring(0, dni.length - 1);
    const letter = dni.substring(dni.length - 1).toUpperCase();
    const expected = "TRWAGMYFPDXBNJZSQVHLCKET"[numbers % 23];
    return letter === expected;
  }
}

try {
  let person = new Person("000000A");
  console.log(person.getDNI());
} catch (err) {
  console.error(err);
}

// * another way to declare the same class
/* 
class Person {
  #dni: string;

  constructor(dni: string) {
    if (!this.#validateDNI(dni)) throw new Error("Invalid DNI");
    this.#dni = dni;
  }

  get dni(): string {
    return this.#dni;
  }

  set dni(newDni: string) {
    if (!this.#validateDNI(newDni)) {
      throw new Error("Error: DNI format is not valid");
    }
    this.#dni = newDni;
  }

  #validateDNI(dni: string): boolean {
    const regexp = /^\d{8}[a-zA-Z]$/;
    if (!regexp.test(dni)) return false;

    const numbers = +dni.substring(0, dni.length - 1);
    const letter = dni.substring(dni.length - 1).toUpperCase();
    const expected = "TRWAGMYFPDXBNJZSQVHLCKET"[numbers % 23];
    return letter === expected;
  }
}
*/
