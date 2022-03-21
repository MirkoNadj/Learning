"use strict";
function greeter(fn) {
    fn("Hello, World");
}
function printToCon(s) {
    console.log(s);
}
greeter(printToCon);
function doSomething(fn) {
    console.log(fn.description + "returned" + fn(6));
}
const someDescFunc = {
    description: 'Opisna funkcija',
}(a, number);
true;
