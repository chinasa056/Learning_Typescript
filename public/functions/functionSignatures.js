"use strict";
// function signature basically desccribes the general structr of a function, what argument it takes in and what data it returns e.g
// let hi : Function;
// example 1
let greetings;
// this says greetings is a function that takes two parametrs as strimgs asnd it does not reture anything. so we write it in thi spattern
greetings = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greetings("Ada", "hi");
// example 2
let calc;
// you write this like: 
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else if (action === "minus") {
        return numOne - numTwo;
    }
    else {
        return numOne * numTwo;
    }
};
let loggDetails;
loggDetails = (ninja) => {
    const details = `${ninja.name} is ${ninja.age} old `;
    console.log(details);
    return details;
};
loggDetails({
    name: 'ada',
    age: 12
});
