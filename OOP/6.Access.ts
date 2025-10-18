// * Encapsulation :
// * is the practice of bundling data (attributes)
// * and the code that operates on that data (methods) into a single unit.
// * Called Class.

// ? How the encapsulation works
//  private: means that prevents any code outside the class from directly reading or modifying the data.
// protected: means that only subclass or class's child can code access. (It only can read.*)
// public: code outside the class can directly reading or modifying the data.

// LOOK AT THIS , we can encapsule inside of the constructor:
class Treasure {
  constructor(private value?: number, public location?: string) {
    this.value = value ?? 0;
    this.location = location ?? "unname";
  }

  public toString(): string {
    return `Location: ${this.location}, value: ${this.value} `;
  }
}

const coin: Treasure = new Treasure();
console.log(coin.toString());
coin.location = "Bs As";
// coin.value = 123 // Property 'value' is private and only accessible within class 'Treasure'.
console.log(coin.toString());
