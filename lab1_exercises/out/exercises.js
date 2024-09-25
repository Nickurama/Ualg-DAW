"use strict";
// Exercise 1
let a = 1042; // number
let b = 'apples and oranges'; // string
const c = 'pineapples'; // const string
let d = [true, true, false]; // bool[]
let e = { type: 'ficus' }; // Object with "type" string property
let f = [1, false]; // array with number and bool
const g = [3]; // constant array with number
let h = null; // null
// Exercise 2
let i = 3;
//i = 4 // error because i can only be assigned to 3
let j = [1, 2, 3];
j.push(4);
// j.push('5') // error because you can only use ints in j
// Exercise 3
// no return
// Exercise 4
let obj = { x: 0 };
obj.bar = 100;
obj = "hello";
// generates no compiler errors
// Exercise 5
var hewwo;
(function (hewwo) {
    hewwo[hewwo["japanese food"] = 0] = "japanese food";
    hewwo[hewwo["chinese food"] = 100] = "chinese food";
    hewwo[hewwo["pizza"] = 101] = "pizza";
})(hewwo || (hewwo = {}));
// console.log(hewwo)
// Exercise 6
let myMathFunction;
// this one will work
function add(n1, n2) {
    return "" + n1 + n2;
}
myMathFunction = add;
// function multiply(a: number, b:number): number {
// 	return a * b;
// }
// myMathFunction = multiply
// Exercise 7
const user = {
    name: "Daniel",
    age: 26,
};
// user.location; // property does not exist 
// Exercise 8
function coords(objWithCoords) {
    console.log("(" + objWithCoords.x + ", " + objWithCoords.y + ")");
}
function names(obj) {
    if (obj.lastName === undefined)
        console.log(obj.firstName.toUpperCase());
    else
        console.log((obj.firstName + " " + obj.lastName).toUpperCase());
}
let temp9 = {
    firstName: "OwO",
    lastName: "UwU"
};
// Exercise 11
function printId(id) {
    // console.log(id.toUpperCase()) // does not work, number does not have toUpperCase()
}
function welcomePeople(x) {
    console.log("Welcome " + x);
}
// Exercise 12
function getFirstThree(x) {
    return x.slice(0, 3);
}
const req = { url: "https://example.com", method: "GET" };
function gradeLabs(labs) {
    for (let i = 0; i < labs.length; i++) {
        let lab = labs[i];
        try {
            let result = lab.runLab(3);
            console.log(`${lab.student} code worked: ${result === 27}`);
        }
        catch (error) {
            console.error("Error thrown");
        }
    }
}
let studentLabs = [
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
gradeLabs(studentLabs);
let studentLabs2 = [
    {
        student: 'Blake',
        myCode: function (num) {
            return Math.pow(num, num);
        }
    },
    {
        student: 'Jessica',
        runLab: function (num) {
            return Math.pow(num, num);
        }
    },
    {
        student: 'Mya',
        runLab: function (num) {
            return num * num;
        }
    }
];
gradeLabs(studentLabs2);
