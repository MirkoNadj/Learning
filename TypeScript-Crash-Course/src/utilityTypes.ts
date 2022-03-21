/* ******** PARTIAL TYPE **********
Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type */

//e1-------------------------------------------------------------
interface Todo {
    title: string;
    description: string;
    daysLeft: number;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate};
}

const todo15 = {
    title: "organize desk",
    description: "clear clutter",
    daysLeft: 2
}
console.log(todo15)

const todo16 = updateTodo(todo15, {description: "throw out papers", daysLeft: 3 })    // because of Partial there is no need for all properties, just description...
console.log(todo16)
//e2---------------------------------------------------------------
interface StarshipInterface {
    name: string;
    ftlEngine: boolean;
    weapons: string[];
}

function upgradeStarship(ship: StarshipInterface, upgradedProperties: Partial<StarshipInterface> ) {
    return {...ship, ...upgradedProperties}
}

const ship12 = {
    name: "Stargazer",
    ftlEngine: false,
    weapons: ['phaser', 'torpedoes']
}
console.log(ship12)
const ship12_A = upgradeStarship(ship12, {ftlEngine: true});
console.log(ship12_A)
const ship12_B = upgradeStarship(ship12_A, {weapons: ['phaser', 'disruptor'] })
console.log(ship12_B)

/* ******** REQUIRED TYPE **********
   Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned */

//e1---------------------------------------------------------------
interface Props {
    a?: number;
    b?:string;
}

const obj1: Props = {a: 5};
const obj2: Required<Props> = {a:2, b:'must have all properties, unlike obj1'}
//e2---------------------------------------------------------------
interface BoatInter {
    name?: string;
    size?: number;
    speed?: number
}
function displaySomeBoatProperties(boat:BoatInter) {
    console.log(`Boat ${boat.name} is ${boat.size} meters long.`)
}
function displayAllBoatProperties(boat:Required<BoatInter>) {    // must enter all properties
    console.log(`Boat ${boat.name} is ${boat.size} meters long and the speed is ${boat.speed} knots.`)
}

const boat1 = {
    name: 'Istranka',
    size: 6,
}
const boat2 = {
    name: 'Pasara',
    size: 5,
    speed: 10,
}

displaySomeBoatProperties(boat1)
displayAllBoatProperties(boat2)

/* ******** READONLY TYPE **********
   Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
   Useful for frozen objects.  */

interface TodoSome {
    title: string
}

const todoS: Readonly<TodoSome> = {
    title: "Delete inactive"
};
//todoS.title = "Hello";        // cannot reassign!! title because readonly type

/* ******** RECORD TYPE **********
   Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties
   of a type to another type.  */

//e1---------------------------------------------------------------
interface PlanesInfo {
    name: string;
    flightNum: number;
}

// type Planes = 'plane1' | 'plane2' | 'plane3'  ==> can use this instead of string argument in Record<>

const someFlights: Record<string, PlanesInfo> = {
    plane1: {name: 'Boing 747', flightNum: 857},
    plane2: {name: 'Airbus 303', flightNum: 698},
    plane3: {name: 'DC 10', flightNum: 325},
}

//e2---------------------------------------------------------------
interface CatInfoInt {
    age: number;
    breed: string;
}

type CatNames = 'miffy' | 'boris' | 'mordred' | 'mita';

const someCats: Record<CatNames, CatInfoInt> = {
    miffy: {age: 10, breed: 'Persian'},
    boris: {age: 5, breed: 'Maine Coon'},
    mordred: {age: 16, breed: 'British Shorthair'},
    mita: {age: 8, breed: "3colore"}
}

/* ******** PICK TYPE **********
   Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.  */

interface ToDoTasks {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<ToDoTasks, 'title' | 'completed'>

const todo8: TodoPreview = {
    title: 'Wash dishes',
    completed: false,
};

/* ******** OMIT TYPE **********
   Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals) 
   == opposite of PICK == */

   interface ToDoTasks {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreviewWithout = Omit<ToDoTasks, 'description'>

const todo9: TodoPreviewWithout = {
    title: 'Wash car',
    completed: true,
};

/* ******** EXCLUDE TYPE **********
   Constructs a type by excluding from UnionType all union members that are assignable to ExcludeMembers. */
//e1---------------------------------------------------------------
type T0 = Exclude<'a' | 'b' | 'c', 'a'>

//const someString1:T0 = 'a'        String 'a' is excluded
const someString2:T0 = 'b'

type T6 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
const someString6: T6 = 'c'

type T7 = Exclude<string | number | (() => void), Function>
var someStringOrNumber:T7 = 'string'
var someStringOrNumber:T7 = 7;
// var someStringOrNumber:T7 = (() => {});   cannot be a function, it's excluded

//e2---------------------------------------------------------------
type AllAvailableDrinks = "Coffe" | "Tea" | "Juice" | "Lemonade";

let JohnsDrink1: AllAvailableDrinks = "Coffe"

type DrinksThatJaneDoesntLike = "Coffe" | "Juice";

let JanesDrink1: Exclude<AllAvailableDrinks, DrinksThatJaneDoesntLike> = "Tea"

/* ******** EXTRACT TYPE **********
   Constructs a type by extracting from Type all union members that are assignable to Union */
//e1---------------------------------------------------------------
type T9 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;

const someString9:T9 = 'a'
//const someString9f:T9 = 'f'  --->     'f' is not a union member

type T8 = Extract<string | number | (() => void), Function>

const someFunc8: T8 = () => {};
//const someFunc8Num: T8 = 8   --->      number is not extracted from union

//e2---------------------------------------------------------------
type DrinksJaneLikes2 = "Tea" | "Lemonade" | "Mojito";      

let JanesDrinkA: Extract<AllAvailableDrinks, DrinksJaneLikes2> = "Lemonade"  // Mojito is not in AvailableDrinks...

/* ******** NON NULLABLE TYPE **********
   Constructs a type by excluding null and undefined from Type */

type T11 = NonNullable<string | number | undefined>

const noUndefined1: T11 = 'string';
const noUndefined2: T11 = 2;
//const noUndefined3: T11 = undefined;    ---> not possible

type T12 = NonNullable<string[] | null | undefined>

const noNullOrUndefined: T12 = ['just', 'string', 'array']

//e2---------------------------------------------------------------
interface ColorStarship {
    color?: 'black' | 'white' | 'silver'     // | undefined here is also possible without NonNullable
}

function showShipColorA (name: string, starShipColor: ColorStarship) {
    return console.log(name, starShipColor.color)
}

function showShipColorB (name: string, starShipColor: ColorStarship['color']) {     //---> 'other way with []'
    return console.log(name, starShipColor)
}

showShipColorA('Ent', {color:'black'})
showShipColorB('Ent', 'black')

function showShipColorNoNull (name: string, starShipColor: NonNullable<ColorStarship['color']>) {
    return console.log(name, starShipColor)
}
//showShipColorNoNull ('Ent', null)    ---> not possible
showShipColorNoNull ('Ent', 'silver')

/* ******** PARAMETERS TYPE **********
   Constructs a tuple type from the types used in the parameters of a function type Type. */

declare function f1(arg: {a: number, b: string}) : void;

type T22 = Parameters<() => string>

let emptyTuple22:T22 = []

type T33 = Parameters<(s: string) => void>

let someArray33: T33 = ['somestring']

type T44 = Parameters<<T>(arg: T) => T>;

let someArg44: T44 = ['unknown, could be anything']

type T55 = Parameters<typeof f1>;

let someParFunc: T55 = [{a: 1, b: 'one'}]

type T66 = Parameters<any>;

let something:T66 = ['unknown', 'array']

type T77 = Parameters<never>;
 
//type T88 = Parameters<Function>   ---> not possible


/* ******** CONSTRUCTOR PARAMETERS TYPE **********
   Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all 
   the parameter types (or the type never if Type is not a function) */

type T00 = ConstructorParameters<ErrorConstructor>;

const something00:T00 = ['some optional message']
const something00a:T00 = [undefined]

type T111 = ConstructorParameters<FunctionConstructor>;

const something111 = ['array', 'of', 'strings']

type T222 = ConstructorParameters<RegExpConstructor>;

type T333 = ConstructorParameters<any>;

let something333 = ['unknown', 2, true, undefined, null];

//type T444 = ConstructorParameters<Function>     ---> not possible


/* ******** RETURNTYPE TYPE **********
   Constructs a type consisting of the return type of function Type. */

declare function f2(): {a: number, b: string};

type T555 = ReturnType<() => string>

let something555: T555 = 'some string'

type T666 = ReturnType<(s: string) => void>;

let something666: T666 = undefined;

type T777 = ReturnType<<T>() => T>;

let something777: T777 = 'unknown, can be anything'

type T888 = ReturnType<<T extends U, U extends number[]>() => T>

let something888: T888 = [1, 2, 3, 4];

type T999 = ReturnType<typeof f2>;

let something999: T999 = {a: 3, b: '3'}

type T1x = ReturnType<any>;

let something1x: T1x = 'can be anything';

type T2x = ReturnType<never>;

// let something2x: T2x =  ???     ---> never

//type T3x = ReturnType<string>;   ---> not possible

//type T3x = ReturnType<Function>  ---> not possible


/* ******** INSTANCETYPE TYPE **********
   Constructs a type consisting of the instance type of a constructor function in Type. */

class C {
    x = 0;
    y = 0;
}

type T4x = InstanceType<typeof C>;

const someObj4x: T4x = {x:1, y:6}

type T5x = InstanceType<any>;

const someObj5x: T5x = {g:'can be', t:'anything here', q: 0}

type T6x = InstanceType<never>;

//const someObj6x: T6x = ???       ---> never

//type T7x = InstanceType<string>    ---> not possible

//type T7x = Instancetype<Function>  ---> not possible