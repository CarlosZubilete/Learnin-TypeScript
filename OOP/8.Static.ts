// * Static:
// * You can define properties and methods.
// * They are not belong to the object.
// * They're belong to the class, shared by all instances.
// * They don't need to be instance.

class Product {
  private _name: string;
  private static _counter: number = 0;
  private _id: number;

  constructor(name: string) {
    this._name = name;
    Product._counter++;
    this._id = Product._counter;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name.trim().length > 0) {
      this._name = name;
    }
  }

  static nextProduct(): number {
    return Product._counter + 1;
  }

  toString(): string {
    return `Product { _id: ${this._id}, name: ${this.name} }`;
  }
}

const rice: Product = new Product("Rice");
const tuna: Product = new Product("Tuna");
const milk: Product = new Product("Milk");

console.log(rice.toString());
console.log(tuna.toString());
console.log(milk.toString());
console.log("Next Product " + Product.nextProduct());

/* 
[LOG]: "Product { _id: 1, name: Rice }" 
[LOG]: "Product { _id: 2, name: Tuna }" 
[LOG]: "Product { _id: 3, name: Milk }" 
[LOG]: "Next Product 4" 
*/
