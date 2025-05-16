const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
