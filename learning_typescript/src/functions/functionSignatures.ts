// function signature basically desccribes the general structr of a function, what argument it takes in and what data it returns e.g

// let hi : Function;

// example 1
let greetings: (a: string, b: string) => void;
// this says greetings is a function that takes two parametrs as strimgs asnd it does not reture anything. so we write it in thi spattern
greetings = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
    
}
greetings("Ada", "hi")

// example 2
let calc: (a:number, b: number, c: string) => number
// you write this like: 
calc = (numOne: number, numTwo: number, action: string): number => {
if(action === "add") {
    return numOne + numTwo
} else if(action === "minus") {
    return numOne - numTwo
} else {
    return numOne * numTwo
}
};
// you must make sure the fuction return a number as specified in the function signature

// example 3
// using type aliases
type perosn = {name: string, age: number}
let loggDetails: (obj: perosn) => string

loggDetails = (ninja: perosn) => {
    const details =  `${ninja.name} is ${ninja.age} old `
    console.log(details);
    return details  
};

loggDetails({
    name: 'ada',
    age: 12
})



