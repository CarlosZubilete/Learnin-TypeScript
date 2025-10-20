// * Singleton:
// * Static components allows creating "Singleton structure".
// * A single common instance in different parts of the code

class ShoppingCart {
  // * static variable the same type of the class, for that make to reference an unique instance.
  private static _instance: ShoppingCart;
  private _cart: string[];

  // * This way you handle that there's only one instance
  //  Private constructor prevents external instantiation.
  private constructor() {
    this._cart = [];
  }

  // * Accessor that returns the single shared instance.
  public static get instance(): ShoppingCart {
    // * false or null || return this...
    return this._instance || (this._instance = new this());
    /* Another way 
    if (!this._instance) {
    this._instance = new ShoppingCart();
    }
    return this._instance;
    */
  }

  public add(product: string): this {
    if (product.trim().length > 0) {
      this._cart.push(product);
    }
    return this;
  }

  public get list(): string[] {
    return this._cart;
  }
}

const cartFromHere: ShoppingCart = ShoppingCart.instance;
cartFromHere.add("Banana");
cartFromHere.add("Apple");
cartFromHere.add("Milk");
console.log(cartFromHere.list); // ["Banana", "Apple", "Milk"]

const cartFromThere: ShoppingCart = ShoppingCart.instance;
cartFromThere.add("Orange").add("Lettuce").add("Spinach");
console.log(cartFromThere.list); // ["Banana", "Apple", "Milk", "Orange", "Lettuce", "Spinach"]

// //* new ShoppingCart(); -> This breaks the Singleton rule but ...
// //* if could access to the constructor, we'll get a new list.
// const anotherCart: ShoppingCart = new ShoppingCart(); // ❌ Error: Constructor is private!
// anotherCart.add("Car");
// anotherCart.add("Truck");
// anotherCart.add("Motorcycle");
// console.log(anotherCart.list); // ["Car", "Truck", "Motorcycle"]
