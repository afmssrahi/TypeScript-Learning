// Learning Function in TypeScript

// normal function
function add(a: number, b: number): number {
	return a + b;
}

// function expression
let sum = function (a: number, b: number): number {
	return a + b;
};

// arrow function
let addition = (a: number, b: number): number => {
	return a + b;
};

// optional parameter
function fullName(firstName: string, lastName?: string): string {
	return `${firstName} ${lastName}`;
}

// default parameter
function getSalary(basic: number, bonus: number = 0): number {
	return basic + bonus;
}

// rest parameter
function printNumbers(a: number, ...nums: number[]): void {
	console.log(a);
	console.log(nums);
}

printNumbers(1, 2, 3, 4, 5); // 1, [2, 3, 4, 5]

// spreed parameter
function printNumbers2(a: number, ...nums: number[]): void {
	console.log(a);
	console.log(...nums);
}

printNumbers2(1, 2, 3, 4, 5); // 1, 2, 3, 4, 5

// function type
let greet: (a: string) => void;
greet = function (name: string) {
	console.log(name);
};

// function type with optional parameter
let print2: (a: number, b?: number) => void;
print2 = function (a: number, b?: number) {
	console.log(a, b);
};

// function type with default parameter
let displayInfo: (a: string, b?: number) => void;
displayInfo = function (name: string, age: number = 20) {
	console.log(name, age);
};

// method
let obj = {
	display: (a: number): void => {
		// arrow method
		console.log(a);
	},

	showMsgWithNum(a: number): string {
		// normal method
		return `Hello ${a}`;
	},
};

// map function
let numbers = [1, 2, 3, 4, 5];
let square: number[] = numbers.map((x: number): number => x * x);
console.log(square); // [1, 4, 9, 16, 25]
