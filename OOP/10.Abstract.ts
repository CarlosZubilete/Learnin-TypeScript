// * Abstract class means: this is a base class (a model)
// * You cannot create objects directly from it.
// * Abstract class define using 'abstract' (keyword).
// * Other classes will "extend" it and use it

abstract class Tool {
  // can be used in this class and in child classes
  protected _name: string;
  protected _weight: number;
  // "static" = belongs to the class (shared by all tools)
  private static _count: number = 0;
  // only this class can use it
  private _id: number;

  // * It runs when you create a new Tool
  constructor(name: string, weight: number) {
    this._name = name;
    this._weight = weight;
    // Increase the counter every time a new tool is made
    Tool._count++;
    // Give a unique ID to this tool
    this._id = Tool._count;
  }

  // *you can call it without creating a tool
  public static nextCounter(): number {
    return Tool._count + 1;
  }

  protected getId(): number {
    return this._id;
  }

  // * every child must write this method
  public abstract description(): string;
}

// * PowerTool = electric tool that uses volts
class PowerTool extends Tool {
  public _vols: number;

  constructor(name: string, weight: number, volts?: number) {
    super(name, weight);
    this._vols = volts ?? 0;
  }

  get volts(): number {
    return this._vols;
  }

  set volts(volts: number) {
    if (volts > 0) {
      this._vols = volts;
    }
  }

  public description(): string {
    return `${this._name}  weights ${this._weight}gr and has a power of ${this._vols} volts`;
  }

  // * We can still use the parent getId()
  public getId(): number {
    return super.getId();
  }
}

// * HandTool = manual tool (no power)
class HandTool extends Tool {
  private _length: number;

  constructor(name: string, weight: number, length?: number) {
    super(name, weight);
    this._length = length ?? 0;
  }

  get length(): number {
    return this._length;
  }

  set length(length: number) {
    if (length > 0) {
      this._length = length;
    }
  }

  public getId(): number {
    return super.getId();
  }

  public description(): string {
    return `${this._name}  weights ${this._weight}gr and has a length of ${this._length}cm`;
  }
}

const listTools: Tool[] = [];

listTools[0] = new PowerTool("Jigsaw", 1340, 220);
listTools[1] = new HandTool("Screwdrivers", 150, 30);
listTools[2] = new PowerTool("CordLess Drill", 2000, 220);
listTools[3] = new HandTool("Pliers", 250, 45);

listTools.forEach((element) => {
  if (element instanceof HandTool) {
    console.log(
      `{_id: ${element.getId()}, description: ${element.description()} }`
    );
  } else if (element instanceof PowerTool) {
    console.log(
      `{_id: ${element.getId()}, description: ${element.description()} }`
    );
  }
});

/*
[LOG]: "{_id: 1, description: Jigsaw  weights 1340gr and has a power of 220 volts }" 
[LOG]: "{_id: 2, description: Screwdrivers  weights 150gr and has a length of 30cm }" 
[LOG]: "{_id: 3, description: CordLess Drill  weights 2000gr and has a power of 220 volts }" 
[LOG]: "{_id: 4, description: Pliers  weights 250gr and has a length of 45cm }"
 */
