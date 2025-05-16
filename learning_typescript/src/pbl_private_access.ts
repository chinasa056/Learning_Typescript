// public is the default one, means you can change that property and you can access it from outside and inside the class.
// private allows us t read and change values only inside the class via methods
// the readonly only allows users to read it both inside the class and outside it

 class Cart {
    public user: string;
    public item: string;
    private price: number;
    private quantity: number;
    private totalAmount: number;

    constructor(user: string, item: string, price: number, quantity: number) {
        this.user = user;
        this.item = item;
        this.price = price;
        this.quantity = quantity;
        this.totalAmount = this.price * this.quantity;
    }

    updateQuantity(newQuantity: number): void {
        this.quantity = newQuantity;
        this.totalAmount = this.price * this.quantity;
    }

    applyDiscount(percent: number): void {
        const discount = this.totalAmount * (percent / 100);
        this.totalAmount -= discount;
    }

    getCartDetails(): string {
        return `${this.user} has ${this.quantity} of ${this.item}(s) at $${this.price} each. Total: $${this.totalAmount.toFixed(2)}`;
    }

    addItem(price: number, quantity: number): void {
        if (price !== this.price) throw new Error("Price mismatch for the item.");
        this.quantity += quantity;
        this.totalAmount = this.price * this.quantity;
    }

    removeItem(quantity: number): void {
        if (quantity > this.quantity) throw new Error("Cannot remove more than available quantity.");
        this.quantity -= quantity;
        this.totalAmount = this.price * this.quantity;

    }
    format() {
        return `${this.user} bought ${this.quantity}  ${this.item} at ${this.price} price and her total price is ${this.totalAmount}`

    }
}

const cartOne = new Cart("Maria", "Dinner Dress", 200, 2)

const cartTwo = new Cart("Masha", "Volley ball", 50, 4)

let allCarts: Cart[] = []

allCarts.push(cartOne, cartTwo)
cartOne.format()
console.log(allCarts);

allCarts.forEach((detail) => {
    console.log(detail.format());
    
})

// console.log(cartOne.format());
