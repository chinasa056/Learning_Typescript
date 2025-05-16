const anchor = document.querySelector('a')!;
if(anchor) {
  console.log(anchor.href);
}
console.log(anchor.href);

import { Invoice } from "./classes/invoice.js"
import { Payment } from "./classes/payments.js";
import { hasFormatter } from "./interfaces/hasFormatter.js"

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: hasFormatter
  if(type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});