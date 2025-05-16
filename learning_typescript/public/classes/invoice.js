export class Invoice {
    constructor(c, d, a) {
        // inside the constructor, you can take the parameters and assign the, to the properties of the class object
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} ows ${this.amount} for ${this.details}`;
    }
}
