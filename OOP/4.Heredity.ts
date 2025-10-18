//* Heredity and Polymorphism
/* Paradigm diagrams
  + => public
  # => protected
  - => private
*/
interface PropsPersona {
  readonly dni: string;
  name: string;
  birthDate: Date;
}
class Persona {
  private readonly dni: string; //*  #name: string;
  private name: string;
  //*  Date is an type of object in Javascript
  private birthDate: Date; // yyyy-mm-dd

  constructor(data: PropsPersona | null) {
    if (data) {
      this.dni = data.dni;
      this.name = data.name;
      this.birthDate = data.birthDate;
    } else {
      this.dni = "";
      this.name = "";
      this.birthDate = new Date("");
    }
  }
  //* methods
  public setName(name: string): void {
    if (name.trim().length > 0) this.name = name;
  }
  public getName(): string {
    return this.name;
  }
  // setAge(age: number): void {
  //   if (age > 0) this.age = age;
  // }
  // getAge(): number {
  //   return this.age;
  // }
  public setBirthday(birthdate: Date): void {
    this.birthDate = birthdate;
  }
  public getBirthday(): Date {
    return this.birthDate;
  }
  public getAge(): number {
    const ageDif = Date.now() - this.birthDate.getTime();
    const ageDate = new Date(ageDif); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  public toString(): string {
    return `Persona = { 
      dni: ${this.dni},  
      name ${this.name},
      age: ${this.getAge()},
      birthday: ${this.birthDate.toLocaleDateString("es-AR")}
      }`;
  }
}

// *Example whit Persona Class
// let date = new Date(1997, 4, 15); // months are 0-indexed -> 4 = May
// const studentFour: Persona = new Persona({
//   dni: "003",
//   name: "Lorena",
//   birthDate: date,
// });
// console.log(studentFour.toString()); // "Persona = {  dni: 003,  name Lorena,age: 42,birthday: Thu May 15 1997 .... }"

// * We implements heredity to interface and the class

interface PropsEmployee extends PropsPersona {
  department: string;
  salary: number;
}

class Employee extends Persona {
  private department: string;
  private salary: number;

  constructor(data: PropsEmployee | null) {
    super(data);
    if (data) {
      this.department = data.department;
      this.salary = data.salary;
    } else {
      this.department = "";
      this.salary = 0;
    }
  }

  public toString(): string {
    return `Employee = { 
      department: ${this.department},
      salary: ${this.salary},  
    },
    ${super.toString()}`;
  }
}

// * We implements heredity to interface and the class

interface PropsCustomer extends PropsPersona {
  methodPayment: string;
}

class Customer extends Persona {
  private methodPayment: string;

  constructor(data: PropsCustomer | null) {
    super(data);
    if (data) this.methodPayment = data.methodPayment;
    else this.methodPayment = "";
  }

  public buy(): string {
    return `This Customer ${super.getName()} is VIP`;
  }

  public toString(): string {
    return `Customer{ 
      methodPayment: ${this.methodPayment}
    }, 
    ${super.toString()}`;
  }
}

// * Declare a Class person , it works to like wrapper for Customer and Employee
// const db_people: Persona[] = [];
const db_people: Array<Persona> = [];

db_people[0] = new Employee({
  dni: "12345",
  name: "Person Employee",
  birthDate: new Date(2000, 0, 17),
  department: "Programming",
  salary: 3990,
});

db_people[1] = new Customer({
  dni: "56789",
  name: "Person Customer",
  birthDate: new Date(1997, 2, 14),
  methodPayment: "Marted Card",
});

// * Another wat to print:
// db_people.forEach((v) => {
//   console.log(v.toString());
// });
// * Another wat to print:
//  console.log(db_people.toString());
// * Another wat to print:
for (let people of db_people) {
  if (people instanceof Employee) {
    console.log("THIS IS A EMPLOYEE");
    console.log(people.toString());
  } else if (people instanceof Customer) {
    console.log("THIS IS A Customer");
    // * casting a customer
    const customer: Customer = people as Customer;
    console.log(customer.toString());
    console.log(customer.buy());
  }
}

/* 
[LOG]: "Employee = { 
      department: Programming,
      salary: 3990,  
    },
    Persona = { 
      dni: 12345,  
      name Person Employee,
      age: 25,
      birthday: 17/1/2000
      }" 
[LOG]: "Customer{ 
      methodPayment: Marted Card
    }, 
    Persona = { 
      dni: 56789,  
      name Person Customer,
      age: 28,
      birthday: 14/3/1997
      }" 
*/
