import { Product } from "./product";

interface Cart {
    slug: string 
    name: string 
    price: number
	qty: number;
}

export interface CartItemType extends Product {

}