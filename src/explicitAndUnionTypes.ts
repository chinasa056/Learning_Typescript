
// EXPLICIT AND UNION TYPES
// explicit types: initailizing a variable and explicitely giving it the type you want it to take.
//  you can assign a valuse to it in the future based on the type you assigned
let school: string
let age: number
let isOpened: boolean

school = "Delight International"
age = 10
isOpened = false;

// school = 23 (throws an error because shool has been given the typr of string)

// ARRAYs ( are a little bit more complicated. it has to be intialized as an array of strings) e.g

let fruits: string[]
fruits = ["Mango", "Orange", "Apple"]

// to initialize as an empty array so that we can use .push into it, do this

let allFruits: string[] = []

allFruits.push("Mango")

console.log(allFruits);

// UNION TYPES
// mixture of different types. strings, numbers, booleans ets
let mixedArrays: (string | number | boolean)[] = []
mixedArrays.push("Mary");
mixedArrays.push(26);
mixedArrays.push(false);

console.log(mixedArrays)

// using union types on a normal variable
// now UID canbe either a string or a number
let uid: string | number
uid = 123
uid = "AXbftn"

// objects
let ninjaOne: object
ninjaOne = { name: "Aisha", age: 23, isMArried: true }
// can also be an array because an array is a type of object
ninjaOne = ["Pamela", 23, false]

// to explicitely declare it as an object, you do thids
let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string,
    isMarried: boolean,
    skills: string[]
};

ninjaTwo = {
    name: "Ola",
    age: 20,
    beltColor: "black",
    isMarried: false,
    skills: []
}
ninjaTwo.skills.push("boxing", "Singing")
console.log(ninjaTwo);

// DYNAMIC ANY TYPE
// USED TO TELL TYPESCRIPT THAT THE VALUE of that variable can be any type in the future i.e boolean, string,number etc.  it can also change type.  this erases all the benefits of using typescript. no errors, no hint as to what type something is meant to be. advisable to only use when you dont know the type a variable will return

let personAge: any
personAge = 23
personAge = "twenty-five"
personAge = true
personAge = {name: "Amelia", age: 23}
personAge = ["oranges", "Mango"]

console.log(personAge);

// when used as an array or object, you can push any type of value int that array
let mixedAny: any[] = []
mixedAny.push("Amanda")
mixedAny.push(23)
mixedAny.push(false)
console.log(mixedAny);

let mixedAnyObject: {
  name: any,
  age: any,
  isMarried: any
};

console.log("hello world");
