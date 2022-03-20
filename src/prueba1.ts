interface Subscription {
    name: string;
}
class Spain implements Subscription {
    price: Number = 7.95;
    constructor(public name: string) {
    }
    sign(): void {
        console.log(`Thanks for signup ${this.name}, price ${this.price}.`);
    }
}
let tf = new Spain("Tenerife");
tf.sign(); 