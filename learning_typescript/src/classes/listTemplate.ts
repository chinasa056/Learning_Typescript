
// NUBER ONE
const greetperson = (name: string) => {
    console.log(`hello ${name}`)
};
greetperson('')


// NUMBER 2
const double = function (x: number) {
    return x * x
};
double(7)


// NUMBER 3
const specifyReturnType = (numOne: number, numTwo: number): number => {
    return numOne * numTwo
};


// NUMBER 4
function errorOfTypeAnnotation(x: number, y: number) {
    return x + y
};
// errorOfTypeAnnotation(3, "Eliza")
// this throws an error that the argument of type string cannot be assigned to parameter that is of type NUMBER

// NUMBER 5
const isEven = function (TestNum: number): boolean {
    return TestNum % 2 === 0
};
// console.log(isEven(4));

// number 6
const optionalPArameter = (a: number, b: number, c?: number) => {
    return a + b
};
// by adding a question mark in frnt of the parameter

// NUMBER 8
function functonThatDoesNotHaveAParameter(): string {
    return ""
};

// number 10
const returnStringLength = (text: string): number => {
    return text.length
};
console.log(returnStringLength('hello'));

// number 12
const processUserData = function (userName: string, UserId: string | number) { }

// number 13 
let calculation: (a: number, b: number) => number
// so you define the function like this
calculation = (a: number, b: number) => {
    return b * a
};

// number 14
type reusableFunctionType = (a: number, b: number) => number;
// using that fuctiontype, you define as follows:

const subtract: reusableFunctionType = (x, y) => {
    return x - y
};
const multiply: reusableFunctionType = function (x, y) {
    return x * y
};


// nuber 16
function addNum(a: number, b: number) {
    return a + b;
  }
//   You didn’t write a return type like : number, but TypeScript knows that adding a + b will give out a a number,so it infers that the return type is number.

// in variables
const nam = "Aisha Abdulahi"; 
// inferred as string because of the datatype f the value passed to he variable
const UseAage = 15; 
// inferred as number because of the datatype f the value passed to the variable which is a nmber


