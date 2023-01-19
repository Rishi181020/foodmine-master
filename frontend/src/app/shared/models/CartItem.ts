import { Food } from "./Food";

export class CartItem{
    constructor(public food:Food){
    }
    quantitiy:number=1;
    price:number=this.food.price;
}