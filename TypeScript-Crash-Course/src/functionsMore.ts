function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToCon(s: string) {
    console.log(s)
}

greeter(printToCon)

// function nekaF(func:any) {
//     func('nesto')
// }
// function ideUnutra(s) {
//     console.log(s)
// }
// nekaF(ideUnutra);

// type GreetFunction = (a: string) => void;    ---> type alias
// function greeter2(fn: GreetFunction {
//     //...
// })

/**** Call Signatures  ****
   
We can write call signatures in an object type to add properties to functions   */

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + "returned" + fn(6));
}

