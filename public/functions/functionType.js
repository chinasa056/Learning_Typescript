"use strict";
// when a function is declared, typescript infers it to a type funtion and you cannot change the type
let greet = () => {
    console.log("hello world");
};
// we can explicitly define it as a functtion e.g
let hello;
// this allows it to accept any kind of function as an assignent. e.g
hello = () => {
    console.log("hello world, i just assigned an arrow function to helo");
    // example assigning to an arrow function
};
hello();
hello = function () {
    console.log("hello world from function expression");
    // example assigning to a function expression
};
hello();
function sayHello() {
    console.log("Hello from function declaration");
}
hello = sayHello;
hello();
// defining optional parameters, meaning you can choose to pass it, you can choose not to
const add = (a, b, c) => {
    console.log("normal add: ", a + b);
};
add(6, 34);
// default parameters: paasing a default parameter means even when an argument is not passed, the default output of that function should be 10 etc. in this case, no need for an optional parameter 
// a function in typescript is void when it doesnot actually return something
const addNumbers = (a, b, c = 20) => {
    console.log("add with default value: ", a + b);
};
addNumbers(6, 34);
const minus = (a, b) => {
    return a + b;
};
let result = minus(5, 10);
console.log(result);
