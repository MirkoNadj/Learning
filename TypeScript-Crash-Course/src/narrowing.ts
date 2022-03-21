/*  ===NARROWING===

function padLeft(padding: number | string, input: string): string {
    throw new Error("Not implemented yet!");
}

 if padding is a number:

function padLeft(padding: number | string, input: string) {
    return " ".repeat(padding) + input;
}

***Argument of type 'string | number' is not assignable to parameter of type 'number'.
Type 'string' is not assignable to type 'number'.***

So we have to explicitly check is it a number or a string for padding*/

function padLeft(padding: number | string, input: string) {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}


function printAll(strs: string | string[] | null) {     
    if (strs && typeof strs === 'object') {             // typeof null is actually object!!! ---> thuthiness narrowing needed! ---> is strs truthy?
        for (const s of strs) {                         // for...of statement, iterates over arrays etc.
            console.log(s);
        }
    } else if (typeof strs === 'string') {
        console.log(strs);
    } else {
        // do nothing
    }
}

printAll('single string')
printAll(['some', 'array', 'of', 'strings'])

function printAllWrong(strs: string | string[] | null) {
    // DON'T DO THIS WAY
    if (strs) {                         // problem with empty string ---> falsy
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }else if (typeof strs === 'string') {
            console.log('empty', strs)
        }
    }
}
printAllWrong('')                       // problem with empty string


function multiplyAll(
    values: number[] | undefined,
    factor: number,
): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor) ;
    }
}

console.log(multiplyAll([4,5,6], 5))

// equality narrowing

function example(x: string | number, y: string | boolean) {
    if (x === y) {                                              // if true then TS knows it must be a string
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

function printAll3(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}

interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    if (container.value != null) {                             // because !=  and == check if value is null but ALSO if it is undefined and vise versa
        console.log(container.value);
        container.value *= factor;
    }
}

// in operator narrowing

type Fish = { swim: () => void, name: string }
type Bird = { fly: () => void, name: string}
//type human = {swim?: () => void; fly?: () => void};       ---> Human will appear in both sides of narrowing

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim
    };

    return animal.fly
};

// instanceof narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        //(parameter) x: Date
    }else {
        console.log(x.toUpperCase())
    }
}

// assigments

let xHalf = Math.random() < 0.5 ? 10 : "not less than 0.5"      // xHalf can be number or string

// control flow analysis

function isItHalf() {
    let xH: string | number | boolean;

    xH = Math.random() < 0.5;

    console.log(xH);

    if (Math.random() < 0.5) {
        xH = 'hello';
        console.log(xH);
    } else {
        xH = 100;
        console.log(xH);
    }

    return xH;
}

isItHalf()

// using type predicates

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();

    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

//predicate repeating for more complex example
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    if (pet.name === 'sharkey') return false;
    return isFish(pet);
})

/**** Discriminated unions ****


interface Shape {
    kind: 'circle' | 'square';
    radius?: number;
    sideLength?: number;
}

function getArea1(shape: Shape) {
    return Math.PI * shape.radius ** 2;
    
    // object is possibly undefined
}

function getArea2(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;

    // still it can be undefined
    }
}

!!! we must define Shapes separately !!!   */

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

type Shape = Circle | Square

// function getArea(shape: Shape) {
//     return Math.PI * shape.radius ** 2;   ---> still can be undefined so we check kind property again...
// }

function getArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2
    }
}

// finally with switch

function getAreaSwitch(shape: Shape) {
    switch(shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}

/**** The never type ****

TS uses the never type to represent a state which shouldn't exist.  */

/**** Exhaustiveness checking ****/

function getAreaExhaustive(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
