var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ad = function (x, y) {
    return x + y;
};
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
var df = (function (someArg) {
    return someArg % 2 === 0 ? true : false;
});
df.description = "Checks if a number is even";
var Person = (function () {
    function Person(fstName, lstName) {
        this.fstName = fstName;
        this.lstName = lstName;
        this.fstName = fstName;
        this.lstName = lstName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this.fstName, " ").concat(this.lstName);
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.describe = function () {
        return "This is ".concat(this.fstName, " ").concat(this.lstName, ".");
    };
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(fstName, lstName, _company) {
        var _this = _super.call(this, fstName, lstName) || this;
        _this._company = _company;
        _this._company = _company;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "company", {
        get: function () {
            return this._company;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + " Works at company ".concat(this.company, ".");
    };
    return Employee;
}(Person));
var empl = new Employee("OwO", "UwU", "OwO Business");
var Employee2 = (function () {
    function Employee2(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee2._headcount++;
    }
    Object.defineProperty(Employee2, "headcount", {
        get: function () {
            return Employee2._headcount;
        },
        enumerable: false,
        configurable: true
    });
    Employee2._headcount = 0;
    return Employee2;
}());
console.log(Employee2.headcount);
var emp0 = new Employee2("OwO", "UwU", "OwO Entrepreneur");
console.log(Employee2.headcount);
var emp1 = new Employee2("QwQ", "UwU", "OwO Entrepreneur");
console.log(Employee2.headcount);
var emp2 = new Employee2("pwp", "TwT", "UwU Entrepreneur");
console.log(Employee2.headcount);
//# sourceMappingURL=exercises.js.map