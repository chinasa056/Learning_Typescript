"use strict";
const character = 'Mario';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach((input) => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(4.5));
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// // character = 20;
// character = 'luigi';
// // age = 'yoshi';
// age = 40;
// // isBlackBelt = 'yes';
// isBlackBelt = true;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// // console.log(area('hello'));
// console.log(circ(7.5));
// arrays of strings
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
// names[1] = 3; will throw an error
let numbers = [10, 20, 12, 15];
// Array of numbers
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
// mixed array
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['running'],
};
