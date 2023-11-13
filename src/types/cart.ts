import { Product } from "./product";

interface Cart {
    slug: string 
    name: string 
    price: number
    // shortName: string
    // image: string
	qty: number;
}

export interface CartItemType extends Product, Cart {

}