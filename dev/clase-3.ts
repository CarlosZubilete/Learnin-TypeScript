// Generico
// Example 1:
const generico = <T>(x: T): T => x;
const a = generico<number>(1);
const b = generico<string>("1");
const c = generico<boolean>(true);

// Example 2:
interface Greet<T> {
  greet(x: T): string;
}

const persona: Greet<string> = {
  greet(x: string): string {
    return `Hi ${x}`;
  },
};

const perro: Greet<number> = {
  greet(x: number): string {
    return `Hi ${x} veces`;
  },
};

// functionnal overloading
// Example 1:
function metodoStringONuber(x: string): number;
function metodoStringONuber(x: number): string;
function metodoStringONuber(x: string | number): string | number {
  if (typeof x === "number") {
    return x.toString();
  }

  if (typeof x === "string") {
    return x.length;
  }

  return x;
}

metodoStringONuber("1");

metodoStringONuber(1);

metodoStringONuber(false);

// Example 2
interface Persona {
  name: string;
  greet(x: string): string;
}

interface Perro {
  raza: string;
  greet(x: number): number;
}

function metodoPersonaOPerro(x: Persona): string;
function metodoPersonaOPerro(x: Perro): number;
function metodoPersonaOPerro(x: Persona | Perro): string | number {
  if ("raza" in x) {
    return x.greet(1);
  }
  if ("name" in x) {
    return x.greet("1");
  }
  return x;
}
