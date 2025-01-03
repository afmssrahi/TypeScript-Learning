// Basic Data Types

// String
let firstName: string = 'John'; // explicit type declaration
let lastName = 'Doe'; // implicit type declaration

// Number
let roll: number = 101; // explicit type declaration
let marks = 80; // implicit type declaration

// Boolean
let isPassed: boolean = true; // explicit type declaration
let isFailed = false; // implicit type declaration

// Undefined
let x: undefined = undefined; // explicit type declaration
let y = undefined; // implicit type declaration

// Null
let z: null = null; // explicit type declaration
let a = null; // implicit type declaration

let randomValue: number;
// randomValue = 'efdr'; // Error: Type 'string' is not assignable to type 'number'

// Array
let friends = ['John', 'Doe', 'Smith']; // implicit type declaration
let family: string[] = ['Jane', 'Doe', 'Smith']; // explicit type declaration

let eligibleRolls = [101, 102, 103];
// eligibleRolls.push('test'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Tuple
let person: [string, number] = ['John', 101]; // Tuple
// person = [101, 'John']; // Error: Type 'number' is not assignable to type 'string'

let coordibates: [number, number] = [10, 20]; // Tuple

let ageAndName: [number, string] = [25, 'John']; // Tuple
ageAndName[0] = 30;
ageAndName[1] = 'Jane';
