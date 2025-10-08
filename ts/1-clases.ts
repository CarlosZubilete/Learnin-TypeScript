// Class
export class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hi, my name is  ${this.name}.`;
  }
}

export const person: Person = new Person("Carlos");
// Create a element
let button = document.createElement("button");
// Put into a textContext
button.textContent = "Clicked me";
//
button.onclick = function () {
  alert(person.greet());
};
// Added the button inside the body:
document.body.appendChild(button);

// npm install TypeScript

// tsc index.ts --target ES2015

// tsc –init -> Create a tsconfig.json

// tsc

// tsc --watch -> execute and we're still watch the service
