import { IProduct } from "./type";

export class Product implements IProduct {
    name: string;
    price: string;

    constructor(name: string, price: string) {
        this.name = name;
        this.price = price;
    }
}