"use strict";
/* ******** PARTIAL TYPE **********
Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type */
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo15 = {
    title: "organize desk",
    description: "clear clutter",
    daysLeft: 2
};
console.log(todo15);
const todo16 = updateTodo(todo15, { description: "throw out papers", daysLeft: 3 }); // because of Partial there is no need for all properties, just description...
console.log(todo16);
function upgradeStarship(ship, upgradedProperties) {
    return Object.assign(Object.assign({}, ship), upgradedProperties);
}
const ship12 = {
    name: "Stargazer",
    ftlEngine: false,
    weapons: ['phaser', 'torpedoes']
};
console.log(ship12);
const ship12_A = upgradeStarship(ship12, { ftlEngine: true });
console.log(ship12_A);
const ship12_B = upgradeStarship(ship12_A, { weapons: ['phaser', 'disruptor'] });
console.log(ship12_B);
const obj1 = { a: 5 };
const obj2 = { a: 2, b: 'must have all properties, unlike obj1' };
function displaySomeBoatProperties(boat) {
    console.log(`Boat ${boat.name} is ${boat.size} meters long.`);
}
function displayAllBoatProperties(boat) {
    console.log(`Boat ${boat.name} is ${boat.size} meters long and the speed is ${boat.speed} knots.`);
}
const boat1 = {
    name: 'Istranka',
    size: 6,
};
const boat2 = {
    name: 'Pasara',
    size: 5,
    speed: 10,
};
displaySomeBoatProperties(boat1);
displayAllBoatProperties(boat2);
const todoS = {
    title: "Delete inactive"
};
// type Planes = 'plane1' | 'plane2' | 'plane3'  ==> can use this instead of string argument in Record<>
const someFlights = {
    plane1: { name: 'Boing 747', flightNum: 857 },
    plane2: { name: 'Airbus 303', flightNum: 698 },
    plane3: { name: 'DC 10', flightNum: 325 },
};
const someCats = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
    mita: { age: 8, breed: "3colore" }
};
const todo8 = {
    title: 'Wash dishes',
    completed: false,
};
const todo9 = {
    title: 'Wash car',
    completed: true,
};
//const someString1:T0 = 'a'        String 'a' is excluded
const someString2 = 'b';
const someString6 = 'c';
var someStringOrNumber = 'string';
var someStringOrNumber = 7;
let JohnsDrink1 = "Coffe";
let JanesDrink1 = "Tea";
const someString9 = 'a';
const someFunc8 = () => { };
let JanesDrinkA = "Lemonade"; // Mojito is not in AvailableDrinks...
const noUndefined1 = 'string';
const noUndefined2 = 2;
const noNullOrUndefined = ['just', 'string', 'array'];
function showShipColorA(name, starShipColor) {
    return console.log(name, starShipColor.color);
}
function showShipColorB(name, starShipColor) {
    return console.log(name, starShipColor);
}
showShipColorA('Ent', { color: 'black' });
showShipColorB('Ent', 'black');
function showShipColorNoNull(name, starShipColor) {
    return console.log(name, starShipColor);
}
//showShipColorNoNull ('Ent', null)    ---> not possible
showShipColorNoNull('Ent', 'silver');
let emptyTuple22 = [];
let someArray33 = ['somestring'];
let someArg44 = ['unknown, could be anything'];
let someParFunc = [{ a: 1, b: 'one' }];
let something = ['unknown', 'array'];
const something00 = ['some optional message'];
const something00a = [undefined];
const something111 = ['array', 'of', 'strings'];
let something333 = ['unknown', 2, true, undefined, null];
let something555 = 'some string';
let something666 = undefined;
let something777 = 'unknown, can be anything';
let something888 = [1, 2, 3, 4];
let something999 = { a: 3, b: '3' };
let something1x = 'can be anything';
// let something2x: T2x =  ???     ---> never
//type T3x = ReturnType<string>;   ---> not possible
//type T3x = ReturnType<Function>  ---> not possible
/* ******** INSTANCETYPE TYPE **********
   Constructs a type consisting of the instance type of a constructor function in Type. */
class C {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const someObj4x = { x: 1, y: 6 };
const someObj5x = { g: 'can be', t: 'anything here', q: 0 };
//const someObj6x: T6x = ???       ---> never
//type T7x = InstanceType<string>    ---> not possible
//type T7x = Instancetype<Function>  ---> not possible
