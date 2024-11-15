// Exercise 1
let a = 1042 // number
let b = 'apples and oranges' // string
const c = 'pineapples' // const string
let d = [true, true, false] // bool[]
let e = {type: 'ficus'} // Object with "type" string property
let f = [1, false] // array with number and bool
const g = [3] // constant array with number
let h = null // null

// Exercise 2
let i : 3 = 3
//i = 4 // error because i can only be assigned to 3

let j = [1, 2, 3]
j.push(4)
// j.push('5') // error because you can only use ints in j

// Exercise 3
// no return

// Exercise 4
let obj : any = { x: 0 }
obj.bar = 100
obj = "hello"
// generates no compiler errors

// Exercise 5
enum hewwo
{
	"japanese food",
	"chinese food" = 100,
	"pizza",
}
// console.log(hewwo)

// Exercise 6
let myMathFunction : (num1: number, num2: number) => string;

// this one will work
function add(n1: number, n2: number): string {
	return "" + n1 + n2
}
myMathFunction = add

// function multiply(a: number, b:number): number {
// 	return a * b;
// }
// myMathFunction = multiply

// Exercise 7
const user = {
	name: "Daniel",
	age: 26,
}
// user.location; // property does not exist 

// Exercise 8
function coords(objWithCoords: {x: number, y: number}) : void
{
	console.log("(" + objWithCoords.x + ", " + objWithCoords.y + ")");
}
// coords({x: 5, y: 3})

// Exercise 9
type obj9 = {
	firstName: string
	lastName?: string
}
function names(obj: obj9)
{
	if (obj.lastName === undefined)
		console.log(obj.firstName.toUpperCase())
	else
		console.log((obj.firstName + " " + obj.lastName).toUpperCase())
}

let temp9: obj9 = {
	firstName: "OwO",
	lastName: "UwU"
}
// names(temp9)

// Exercise 10
type obj10 = {
	x: number,
	y: number,
}

// Exercise 11
function printId(id: number | string) {
	// console.log(id.toUpperCase()) // does not work, number does not have toUpperCase()
}
function welcomePeople(x: string[] | string) {
	console.log("Welcome " + x)
}

// Exercise 12
function getFirstThree(x: number[] | string) {
	return x.slice(0, 3)
}
// it works, because.
// console.log(getFirstThree([1, 2, 3, 4, 5]))
// console.log(getFirstThree("hewwoooo"))

// Exercise 13
declare function handleRequest(url: string, method: "GET" | "POST"): void
const req = { url: "https://example.com", method: "GET" }
// handleRequest(req.url, req.method as "GET" | "POST") // fixed!

// Exercise 14

type lab = {
	student: string,
	runLab: (num: number) => number,
}

function gradeLabs(labs: any){
	for (let i=0; i < labs.length; i++) {
		let lab = labs[i];
		try {
			let result = lab.runLab(3);
			console.log(`${lab.student} code worked: ${result === 27}`);
		}
		catch(error: any) {
			console.error("Error thrown");
		}
	}
}

let studentLabs: lab[] = [
	{
		student: 'Carly',
		runLab: function (num) {
			return Math.pow(num, num);
		}
	},
	{
		student: 'Erica',
		runLab: function (num) {
			return num * num;
		}
	}
];

// gradeLabs(studentLabs);

let studentLabs2 = [
	{
		student: 'Blake',
		myCode: function (num: number) {
			return Math.pow(num, num);
		}
	},
	{
		student: 'Jessica',
		runLab: function (num: number) {
			return Math.pow(num, num);
		}
	},
	{
		student: 'Mya',
		runLab: function (num: number) {
			return num * num;
		}
	}
];
// gradeLabs(studentLabs2);

// Exercise 16
// add = function (x: string, y: string): number
// {
// 	return x.concat(y).length;
// }

let ad: (a: number, b: number) => number =
	function (x: number, y: number) {
	return x + y;
}
// ANSWER: the first one assigns a variable "add" to be the function specified
// the second one declares a variable "ad" to be a function, and assigns it to the function specified

// Exercise 17
// let promotion: (price: number, discount: number = 0.05) => number;

// Cannot initialize variables in function declaration, only in initialization.

// Exercise 18
type DescribableFunction = {
	description: string;
	(someArg: number): boolean;
}

function doSomething(fn: DescribableFunction)
{
	console.log(fn.description + " returned " + fn(6));
}

let df: DescribableFunction = (
	(someArg: number): boolean => {
		return someArg % 2 === 0 ? true : false;
	}
) as DescribableFunction
df.description = "Checks if a number is even";

// doSomething(df);

// Exercise 19
class Person {
	constructor(private fstName: string, private lstName: string) {
		this.fstName = fstName;
		this.lstName = lstName;
	}

	get fullName(): string {
		return `${this.fstName} ${this.lstName}`;
	}

	describe(): string {
		return `This is ${this.fstName} ${this.lstName}.`;
	}
}

class Employee extends Person{
	constructor(fstName: string, lstName: string, private _company: string) {
		super(fstName, lstName);
		this._company = _company;
	}

	get company(): string {
		return this._company;
	}

	override describe(): string {
		return super.describe() + ` Works at company ${this.company}.`;
	}
}

let empl: Employee = new Employee("OwO", "UwU", "OwO Business");
// console.log("full name: " + empl.fullName);
// console.log("company: " + empl.company);
// console.log("description: " + empl.describe());

// Exercise 20

class Employee2 {
	private static _headcount: number = 0;
	constructor(
		private firstName: string,
		private lastName: string,
		private jobTitle: string)
	{
		Employee2._headcount++;
	}

	static get headcount() {
		return Employee2._headcount;
	}
}

console.log(Employee2.headcount);
let emp0: Employee2 = new Employee2("OwO", "UwU", "OwO Entrepreneur")
console.log(Employee2.headcount);
let emp1: Employee2 = new Employee2("QwQ", "UwU", "OwO Entrepreneur")
console.log(Employee2.headcount);
let emp2: Employee2 = new Employee2("pwp", "TwT", "UwU Entrepreneur")
console.log(Employee2.headcount);

