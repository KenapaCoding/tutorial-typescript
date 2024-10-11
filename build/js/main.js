"use strict";
class Product {
    // public name:string; //data
    // public price:number; //data
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product : ${this.name}, Price : $${this.price}`);
    }
}
class Electronic extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    displayElectronic() {
        console.log(`Warranty : ${this.warranty} years`);
        super.displayProduct();
        console.log(this.name);
    }
}
const product1 = new Product("Laptop", 1500);
const electronic1 = new Electronic("Smartphone", 1000, 2);
console.log(electronic1);
electronic1.displayElectronic();
console.log(product1.name);
product1.name = "Komputer";
console.log(product1.name);
// const product2 = new Product("Handphone", 1500)
// const product3 = new Product("Mouse", 1500)
// console.log(product1)
// product1.displayProduct()
