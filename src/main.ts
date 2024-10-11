class Product{
    name:string; //data
    price:number; //data

    constructor(name:string, price:number){
        this.name = name
        this.price = price
    }

    displayProduct():void {
        console.log(`Product : ${this.name}, Price : $${this.price}`)
    }
}

class Electronic extends Product {
    warranty:number

    constructor(name:string,price:number,warranty:number){
        super(name,price)
        this.warranty = warranty
    }

    displayElectronic():void {
        console.log(`Warranty : ${this.warranty} years`)
        super.displayProduct()
    }
}

const electronic1 = new Electronic("Smartphone", 1000, 2)
console.log(electronic1)

electronic1.displayElectronic()















// const product1 = new Product("Laptop", 1500)
// const product2 = new Product("Handphone", 1500)
// const product3 = new Product("Mouse", 1500)

// console.log(product1)
// product1.displayProduct()

