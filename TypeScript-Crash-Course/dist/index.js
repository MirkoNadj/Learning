"use strict";
let id = 5;
let company = "someName";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
x = true;
//id =  '5'
//console.log('ID:', id)
// just declare
let age;
age = 30;
ids.push(6);
// Tuple
let person = [1, 'Name', true];
// Tuple array
let employees;
employees = [
    [1, 'first'],
    [2, 'second'],
    [3, 'third'],
    //[4, true]
];
// Union
let pid;
pid = '33';
pid = 33;
//pid = true
// Enum
var DirectionNumber;
(function (DirectionNumber) {
    DirectionNumber[DirectionNumber["Up"] = 1] = "Up";
    DirectionNumber[DirectionNumber["Down"] = 2] = "Down";
    DirectionNumber[DirectionNumber["Left"] = 3] = "Left";
    DirectionNumber[DirectionNumber["Right"] = 4] = "Right";
})(DirectionNumber || (DirectionNumber = {}));
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "Up";
    DirectionString["Down"] = "Down";
    DirectionString["Left"] = "Left";
    DirectionString["Right"] = "Right";
})(DirectionString || (DirectionString = {}));
console.log(DirectionNumber.Down);
console.log(DirectionString.Down);
// Objects
const user1 = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 2,
    name: 'Jane'
};
// Type Assertion
let cid = 1;
//let customerId = <number>cid;    // one way
let customerId = cid; // other way
// Functions
function addNum(x, y) {
    return x + y;
}
//console.log(addNum('1',2))
function logMsg(message) {
    console.log(message);
}
logMsg('something');
logMsg(345);
const user3 = {
    id: 1,
    name: 'Tom',
    age: 22,
    adress: 'Some street'
};
const add = (x, y) => x + y;
const sub = (t, s) => t - s;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const person1 = new Person(1, 'john');
console.log(person1.register());
class OldCar {
    constructor(yearOfProduction, color, engine, repairible) {
        this.yearOfProduction = yearOfProduction;
        this.color = color;
        this.engine = engine;
        this.repairible = repairible;
    }
    repair() {
        return `Is it repairible? ${this.repairible}`;
    }
}
const someCar = new OldCar(1981, 'blue', 'V8', true);
console.log(someCar);
class Paint {
    constructor(colorS, volumeLS, notExpiredS) {
        this.color = colorS;
        this.volumeL = volumeLS;
        this.notExpired = notExpiredS;
    }
    isItUsable() {
        return `Color ${this.color} is usable: ${this.notExpired}`;
    }
}
const somePaint1 = new Paint('red', 10, true);
console.log(somePaint1);
console.log(somePaint1.isItUsable());
class WoodenBoard {
    constructor(woodSpec, lengthSpec, widthSpec, heightSpec, availableSpec) {
        this.wood = woodSpec,
            this.length = lengthSpec,
            this.width = widthSpec,
            this.height = heightSpec,
            this.available = availableSpec;
    }
    isItOnStock() {
        return `The board ${this.length} x ${this.width} x ${this.height} is on stock: ${this.available}`;
    }
}
const someBoard1 = new WoodenBoard('oak', 100, 15, 5, true);
console.log(someBoard1);
console.log(someBoard1.isItOnStock());
class specialWoodenBoard extends WoodenBoard {
    constructor(woodSpec, lengthSpec, widthSpec, heightSpec, availableSpec, specialSpec) {
        super(woodSpec, lengthSpec, widthSpec, heightSpec, availableSpec);
        this.special = specialSpec;
    }
}
const someSpecBoard1 = new specialWoodenBoard('cherry', 120, 12, 8, true, 'rare');
console.log(someSpecBoard1);
class HiEndPaint extends Paint {
    constructor(colorS, volumeLS, notExpiredS, priceHi, storeHi) {
        super(colorS, volumeLS, notExpiredS);
        this.price = priceHi;
        this.store = storeHi;
    }
}
const someHiEndPaint1 = new HiEndPaint('violet', 10, false, 1000, 'BG');
console.log(someHiEndPaint1);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4, 5]);
let stringArr = getArray(['one', 'two', 'three']);
console.log(numArr);
console.log(stringArr);
// GENERICS
const addId = (obj) => {
    const id = Math.random().toString(16).slice(2);
    return Object.assign(Object.assign({}, obj), { id });
};
const someGuy = {
    name: 'Jack'
};
const result = addId(someGuy);
console.log(result);
const generateIdForPerson = (personObject) => {
    const randomID = Math.random().toString(16).slice(2);
    return Object.assign(Object.assign({}, personObject), { randomID });
};
const person13 = {
    name: "Jane",
    age: 22
};
const person14 = {
    name: "Jill",
    age: '25'
};
const somePersonWithID13 = generateIdForPerson(person13);
const somePersonWithID14 = generateIdForPerson(person14);
console.log(somePersonWithID13);
console.log(somePersonWithID14);
const updateStarship = (starID, starship) => { };
updateStarship(1, {
    name: 'Explorer', // no need to put every property
    //enableHyperJump: true
});
const displayBoat = (boatID, boat) => {
    console.log(`Boat: ${boatID} is named ${boat.name} and is ${boat.size} meters long.`);
};
displayBoat(23, { name: 'Magelan', size: 25, speed: 30 }); // optional properties became required
const todo = {
    title: "something",
};
todo.title;
const showBikePrice = (bikeID, bike) => {
    console.log(`Bike ${bike.name} is ${bike.price} euros`);
};
showBikePrice(55, { name: 'Tracker', price: 550 });
const planes = {
    plane1: {
        name: 'MIG 29',
        operational: true
    },
    plane2: {
        name: 'Raptor',
        operational: false
    }
};
const cats = {
    miffy: { age: 2, breed: "Persian" },
    boris: { age: 3, breed: "Maine Coon" },
    mordred: { age: 1, breed: "British Shorthair" },
    mita: { age: 4, breed: "3colore" }
};
const todo1 = {
    title: "Read a book",
    completed: true
};
console.log(todo1);
const todo2 = {
    title: "Clean sink",
    completed: false
};
console.log(todo2);
let JohnsDrink = "Coffe";
let JanesDrink = "Tea";
let JanesDrinkAgain = "Lemonade"; // Mojito is not in AvailableDrinks...
function paintStarship(id, color) { return (`${color}`); }
function realyPaintStarship(id, color) { console.log(`${color}`); }
paintStarship(1, undefined);
realyPaintStarship(2, 'red');
