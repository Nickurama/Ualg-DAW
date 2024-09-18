var a = 1042;
var b = 'apples and oranges';
var c = 'pineapples';
var d = [true, true, false];
var e = { type: 'ficus' };
var f = [1, false];
var g = [3];
var h = null;
var i = 3;
var j = [1, 2, 3];
j.push(4);
var obj = { x: 0 };
obj.bar = 100;
obj = "hello";
var hewwo;
(function (hewwo) {
    hewwo[hewwo["japanese food"] = 0] = "japanese food";
    hewwo[hewwo["chinese food"] = 100] = "chinese food";
    hewwo[hewwo["pizza"] = 101] = "pizza";
})(hewwo || (hewwo = {}));
var myMathFunction;
function add(n1, n2) {
    return "" + n1 + n2;
}
myMathFunction = add;
var user = {
    name: "Daniel",
    age: 26,
};
function coords(objWithCoords) {
    console.log("(" + objWithCoords.x + ", " + objWithCoords.y + ")");
}
function names(obj) {
    if (obj.lastName === undefined)
        console.log(obj.firstName.toUpperCase());
    else
        console.log((obj.firstName + " " + obj.lastName).toUpperCase());
}
var temp9 = {
    firstName: "OwO",
    lastName: "UwU"
};
function printId(id) {
}
function welcomePeople(x) {
    console.log("Welcome " + x);
}
function getFirstThree(x) {
    return x.slice(0, 3);
}
var req = { url: "https://example.com", method: "GET" };
function gradeLabs(labs) {
    for (var i_1 = 0; i_1 < labs.length; i_1++) {
        var lab = labs[i_1];
        try {
            var result = lab.runLab(3);
            console.log("".concat(lab.student, " code worked: ").concat(result === 27));
        }
        catch (error) {
            console.error("Error thrown");
        }
    }
}
var studentLabs = [
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
var studentLabs2 = [
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
//# sourceMappingURL=exercises.js.map