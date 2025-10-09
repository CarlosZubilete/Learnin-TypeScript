// enum nameEnum { key = value , key = value }

// 1. By default, TypeScript gives numbers starting at 0 = { 0 ,1 , 2, 3 , ...}
enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let dayNumber: WeekDays = WeekDays.Wednesday;
console.log("dayNumber: ", dayNumber); // 2

// 2. Value defined: You can set your own numbers.
enum Colors {
  Red = 2,
  Green = 4,
  Blue = 6,
}

let color: string = Colors[4];
console.log("color: ", color); // Green: (only works with numbers)

// 3. look at this "string enums"
enum Month {
  January = "first",
  February = "second",
  March = "third",
  April = "fourth",
  May = "fifth",
}

// ERROR -> With string enums, you can only go one way (key -> value):
// let month: string = Month["fifth"];
//
let month: string = Month.May;
console.log("month: ", month); // "fifth"

// *Allows to define a structure of fixed numerical values.
// *They are associated with expression.
// *They ara commonly used in interface design.
