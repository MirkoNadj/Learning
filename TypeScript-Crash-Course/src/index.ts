let id: number = 5;
let company: string = "someName";
let isPublished: boolean = true;
let x: any = "Hello"

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'hello']

x = true;
//id =  '5'
//console.log('ID:', id)

// just declare
let age: number;
age = 30;

ids.push(6)


// Tuple
let person: [number, string, boolean] = [1, 'Name', true]

// Tuple array
let employees: [number, string][];

employees = [
    [1,'first'],
    [2, 'second'],
    [3, 'third'],
    //[4, true]
]

// Union
let pid: string | number;

pid = '33'
pid = 33
//pid = true

// Enum
enum DirectionNumber {
    Up = 1,
    Down,
    Left,
    Right,
}

enum DirectionString {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(DirectionNumber.Down)
console.log(DirectionString.Down)

// Objects

const user1: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}
// !better way!

type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 2,
    name: 'Jane'
}

// Type Assertion
let cid: any = 1
//let customerId = <number>cid;    // one way
let customerId = cid as number     // other way

// Functions

function addNum(x: number, y: number): number {
    return x + y
}

//console.log(addNum('1',2))

function logMsg(message: string | number): void {        // no return -> use void
    console.log(message)
}

logMsg('something')
logMsg(345)
//logMsg(true)

// Interfaces

interface UserInterface {      // similar to 'type' but without '='
    id: number,                // and can't be used with primitives or unions 
    name: string,
    age?: number               // optional property  
    readonly adress: string    // cannot be changed   
}

const user3: UserInterface = {
    id: 1,
    name: 'Tom',
    age: 22,
    adress: 'Some street'
}

// user3.adress = 'Other street'     can't change property because "readonly"

interface MathFunc {
    (z: number, c: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (t: number, s: number): number => t - s

// Classes

interface PersonInterface {
    id: number
    name: string
    //register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        console.log(123)
    }

    register() {
        return `${this.name} is now registered`
    }
}


const person1 = new Person(1,'john')

console.log(person1.register())

interface carsInterface {
    yearOfProduction: number
    color: string
    engine: string
    repairible: boolean
    repair(): string
}

class OldCar implements carsInterface {
    yearOfProduction: number
    color: string
    engine: string
    repairible: boolean
    
    constructor(yearOfProduction: number, color: string, engine: string, repairible: boolean){
        this.yearOfProduction = yearOfProduction
        this.color = color
        this.engine = engine
        this.repairible = repairible
    }

    repair() {
        return `Is it repairible? ${this.repairible}`
    }
}

const someCar = new OldCar(1981, 'blue', 'V8', true)

console.log(someCar)

interface paintInterface {
    color: string;
    volumeL: number;
    notExpired: boolean;
}

class Paint implements paintInterface {
    color: string;
    volumeL: number;
    notExpired: boolean;
    isItUsable(): string {
        return `Color ${this.color} is usable: ${this.notExpired}`
    }
    
    constructor (colorS: string, volumeLS: number, notExpiredS: boolean) {
        this.color = colorS;
        this.volumeL = volumeLS;
        this.notExpired = notExpiredS;
    }
}

const somePaint1 = new Paint('red', 10, true);

console.log(somePaint1)
console.log(somePaint1.isItUsable())

interface boardsInterface {                                 
    wood: string,                                                
    length: number,
    width: number,
    height: number,
    available: boolean,
    isItOnStock(): string
}

class WoodenBoard {      // everything in interface is required but additional 
    wood: string;
    length: number;
    width: number;
    height: number;
    available: boolean;
    
    isItOnStock(): string {
            return `The board ${this.length} x ${this.width} x ${this.height} is on stock: ${this.available}`
        }
        
    constructor (woodSpec: string, lengthSpec: number, widthSpec: number, heightSpec: number, availableSpec: boolean) {
        this.wood = woodSpec,
        this.length = lengthSpec,
        this.width = widthSpec,
        this.height = heightSpec,
        this.available = availableSpec
    }
}

const someBoard1 = new WoodenBoard('oak', 100, 15, 5, true)

console.log(someBoard1)
console.log(someBoard1.isItOnStock())

class specialWoodenBoard extends WoodenBoard {
    special: string;

    constructor(woodSpec: string, lengthSpec: number, widthSpec: number, heightSpec: number, availableSpec: boolean, specialSpec: string) {
        super(woodSpec, lengthSpec, widthSpec, heightSpec, availableSpec)
        this.special = specialSpec
    }
}

const someSpecBoard1 = new specialWoodenBoard('cherry', 120,12,8,true,'rare') 

console.log(someSpecBoard1)


class HiEndPaint extends Paint {
    price: number;
    store: string;

    constructor(colorS: string, volumeLS: number, notExpiredS: boolean, priceHi: number, storeHi: string) {
        super(colorS, volumeLS, notExpiredS)
        this.price = priceHi;
        this.store = storeHi;
    }
}

const someHiEndPaint1 = new HiEndPaint('violet', 10, false, 1000, 'BG')

console.log(someHiEndPaint1)

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArr = getArray<number>([1, 2, 3, 4, 5])
let stringArr = getArray<string>(['one', 'two', 'three'])

console.log(numArr);
console.log(stringArr);


// GENERICS

const addId = <T extends object>(obj:T) => {
    const id = Math.random().toString(16).slice(2)
    return {...obj, id,};
}

interface someGuyInterface {
    name: string
}

const someGuy: someGuyInterface = {
    name: 'Jack'
}

const result = addId<someGuyInterface>(someGuy);
console.log(result)



const generateIdForPerson = <T extends object>(personObject:T) => {
    const randomID = Math.random().toString(16).slice(2)
    return {
        ...personObject,
        randomID,
    }
}

interface personInterface<T> {
    name: string;
    age: T;
    randomID?: string
}

const person13: personInterface<number> = {
    name: "Jane",
    age: 22
}

const person14: personInterface<string> = {
    name: "Jill",
    age: '25'
}

const somePersonWithID13 = generateIdForPerson(person13)
const somePersonWithID14 = generateIdForPerson(person14)


console.log(somePersonWithID13)
console.log(somePersonWithID14)


// #### UTILITY TYPES - PARTIAL  -->  makes interface properties optional

interface Starship {
    name: string;
    enableHyperJump: boolean
}

const updateStarship = (starID: number, starship: Partial<Starship>) => {}

updateStarship(1, {
    name: 'Explorer',         // no need to put every property
    //enableHyperJump: true
})

// #### UTILITY TYPES - REQUIRED  -->  makes optional interface properties NOT optional

interface Boat {
    name?: string;
    size?: number;
    speed?: number
}

const displayBoat = (boatID: number, boat: Required<Boat>) => {
    console.log(`Boat: ${boatID} is named ${boat.name} and is ${boat.size} meters long.`) 
}

displayBoat(23, {name: 'Magelan', size: 25, speed: 30})    // optional properties became required

// #### UTILITY TYPES - READONLY  -->  prevents overide of interface properties

interface Todo {
    title: string;
}

const todo = {
    title: "something",
}

todo.title


interface Bike {
    name: string;
    price: number; 
}

const showBikePrice = (bikeID: number, bike: Bike) => {
    console.log(`Bike ${bike.name} is ${bike.price} euros`)
}

showBikePrice(55, {name: 'Tracker', price: 550});


// #### UTILITY TYPES - RECORD  -->  used to map properties of a type to another type. Creates an object whose property key are Keys
                                //   and property values are Type

interface PlanesInterface {
    name: string;
    operational: boolean;
}

const planes: Record<string, PlanesInterface> = {
    plane1: {
        name: 'MIG 29',
        operational: true 
    },
    plane2: {
        name: 'Raptor',
        operational: false
    }
}

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred" | "mita";

const cats: Record<CatName, CatInfo> = {
    miffy: {age: 2, breed: "Persian"},
    boris: {age: 3, breed: "Maine Coon"},
    mordred: {age: 1, breed: "British Shorthair"},
    mita: {age: 4, breed:"3colore"}
}

// #### UTILITY TYPES - PICK  --> for picking only some of the properties

interface DogsInterface {
    name: string;
    age: number;
    color: string;
}

type OnlyNameOfDog = Pick<DogsInterface, 'name'>

interface TodoTo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoToPreview = Pick<TodoTo, "title" | "completed">

const todo1: TodoToPreview = {
    title: "Read a book",
    completed: true
};

console.log(todo1);

// #### UTILITY TYPES - OMIT  -->  opposite of pick

type TodoDescribe = Omit<TodoTo, "description">

const todo2: TodoDescribe = {
    title: "Clean sink",
    completed: false
}

console.log(todo2)

// #### UTILITY TYPES - EXCLUDE  --> removes ("subtracts") some union members from union type  

type AvailableDrinks = "Coffe" | "Tea" | "Juice" | "Lemonade";

let JohnsDrink: AvailableDrinks = "Coffe"

type DrinksJaneDoesntLike = "Coffe" | "Juice";

let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike> = "Tea"

// #### UTILITY TYPES - EXTRACT  --> pull out a union member from type

type DrinksJaneLikes = "Tea" | "Lemonade" | "Mojito";      

let JanesDrinkAgain: Extract<AvailableDrinks, DrinksJaneLikes> = "Lemonade"  // Mojito is not in AvailableDrinks...


// #### UTILITY TYPES - NonNullable  -->  removes nullable

interface StarshipProperties {
    color?: 'blue' | 'red' | 'green';
}

function paintStarship(id: number, color:StarshipProperties['color']) {return (`${color}`)}

function realyPaintStarship(id: number, color:NonNullable<StarshipProperties['color']>) {console.log(`${color}`)}

paintStarship(1, undefined)
realyPaintStarship(2, 'red')

// #### UTILITY TYPES - RETURN  -->  

type paintStarshipReturn = ReturnType<typeof paintStarship>;


