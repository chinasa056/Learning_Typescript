// classes are used to create a blueprnt of an object; every object createdfrom this class will inherit the properties of the class and have access to its methods;

// class Invoice {
//     client: string;
//     details: string;
//     amount: number

// constructor(c: string, d: string, a: number) {
//     // inside the constructor, you can take the parameters and assign the, to the properties of the class object
//     this.client = c;
//     this.details = d;
//     this.amount = a
// }

// format() {
//     return `${this.client} ows ${this.amount} for ${this.details}`
// }
// }


import { Invoice } from "./classes/invoice.js"
import { Payment } from "./classes/payments.js";
import { hasFormatter } from "./interfaces/hasFormatter.js"

let docOne: hasFormatter;
let docTwo: hasFormatter;

docOne = new Invoice("Amaya", "beauty facials work", 200)
docTwo = new Payment("Alexa", "Hair grooming work", 40)

// to instanciate the class
const invoiceOne = new Invoice("Sammy", "social media management", 300)
const invoiceTwo = new Invoice("Amaya", "building a website", 600)
console.log(invoiceOne.format());
console.log(invoiceTwo.format());

// we could also create an array and only allow  push in objects created from these class into it
let invoices: Invoice[] = []
// invoices.push("Mary") throws an error because it as not created from the class Invoice
invoices.push(invoiceOne)
invoices.push(invoiceTwo)

console.log(invoices);
// nw we can store different invoices in our array

// i commented this upper class so as to practice import and export in typescript
