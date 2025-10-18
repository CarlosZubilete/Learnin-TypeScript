# Heredity in TypeScript

## Paradigm Diagrams

```
- => public
# => protected
- => private
```

---

- **In java** ,

- if you want to heredity an class : use `extends`
- if you want to heredity an interface: use `implements`

- **In TS**
- Only use `extends`

---

## Overloads in TypeScript vs C++ / Java

In languages like C++ or Java, you can create multiple constructors with different signatures (based on parameter types and counts):

```cpp
Person(String dni) {...}
Person(String dni, String name) {...}
Person(String dni, int age) {...}

```

But in TypeScript, you can’t do that — all constructors with the same parameter count would conflict:

```ts
constructor(dni: string, name: string)
constructor(dni: string, age: number)

```

- This doesn’t work because both have the same number of parameters but different types in the same position.
- Instead, TypeScript pretends to have overloads by allowing multiple constructor signatures, but only one real implementation at runtime.

```ts
constructor(dni: string);
constructor(dni: string, name: string);
constructor(dni: string, name: string, age: number);
constructor(dni: string, name?: string, age?: number) {
  // single real implementation
}
```

---

## Properties and interfaces:

1. It looks like an interface, then: What's the difference?
2. When you define a Class, you can declare methods and properties that are access: private, protected and public
3. At interface , all their parameters will be public

---

Use interface as a props at constructor

```ts
interface PropsPersona {
  readonly dni: string;
  name: string;
  age: number;
  birthdate: Date;
}
```

Also we can use a interface to the props :

```ts
class Persona {
  private readonly dni: string;
  private name: string;
  private age: number;
  private birthdate: Date;

  constructor(dataPerson: PropsPersona | null) {
    if (dataPerson) {
      this.dni = dataPerson.dni;
      this.name = dataPerson.name;
      this.age = dataPerson.age;
      this.birthdate = dataPerson.birthdate;
    } else {
      this.dni = "";
      this.name = "";
      this.age = 0;
      this.birthdate = new Date("");
    }
  }
}

// *Example whit Persona Class
let date = new Date(1997, 4, 15); // months are 0-indexed -> 4 = May
const studentFour: Persona = new Persona({
  dni: "003",
  name: "Lorena",
  age: 19,
  birthdate: date,
});
```

Another way to do same, but without interface:

```ts
class Persona {
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
}
const student: Persona = new Persona("000");
const studentTwo: Persona = new Persona("001", "Carlos");
let date = new Date(1997, 4, 15); // months are 0-indexed -> 4 = May
const studentThree: Persona = new Persona("002", "Mariano", 29, date);
```

---

## Interface and Heredity

### **In Java**

```
| You want to...                                      | Keyword      | Example                                     |
| --------------------------------------------------- | ------------ | ------------------------------------------- |
| Inherit from a **class**                            | `extends`    | `class Child extends Parent { }`            |
| Implement an **interface**                          | `implements` | `class Car implements Vehicle { }`          |
| Make an **interface** inherit another **interface** | `extends`    | `interface ElectricCar extends Vehicle { }` |

```

- ✅ Summary (Java):
- extends -> class <--> class, interface <--> interface
- implements -> class <--> interface

### **In TypeScript**

```
| You want to...                                                       | Keyword      | Example                                           |
| -------------------------------------------------------------------- | ------------ | ------------------------------------------------- |
| Class inherit from a **class**                                       | `extends`    | `class Child extends Parent { }`                  |
| Class implement an **interface**                                     | `implements` | `class Car implements Vehicle { }`                |
| Interface inherit another **interface**                              | `extends`    | `interface ElectricCar extends Vehicle { }`       |
| Interface inherit from a **class** (copy its public/protected shape) | `extends`    | `interface Point3D extends Point2D { z: number }` |
```

- ✅ Summary (TypeScript):
- extends -> used for class <--> class and interface <--> (interface or class)
- implements -> used for class <--> interface
