// * Interface and Heredity
// * In typescript the interfaces can heredity to a class as long as its properties to be public.

class Point2D {
  // private x: number; // *Error if we want to heredity this property

  // x: number;
  // y: number;
  // constructor(x: number, y: number) {
  //   this.x = x;
  //   this.y = y;
  // }

  // * If you plan to assign these later.
  // * The ! tells TypeScript “trust me, I’ll assign this before use.”
  x!: number;
  y!: number;
}

// * this property allows to make the class hierarchy more flexible and type defined by interfaces
interface Point3D extends Point2D {
  z: number;
}

const coordinates: Point3D[] = [
  { x: 2, y: 2, z: 2 },
  { x: 4, y: 4, z: 5 },
];

coordinates.forEach((v) => {
  console.log(`x: ${v.x}, z: ${v.y}, z: ${v.z}`);
});
/*
[LOG]: "x: 2, z: 2, z: 2" 
[LOG]: "x: 4, z: 4, z: 5" 
*/
