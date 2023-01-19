import { CartItem } from "./CartItem";

export class Cart{
    Items:CartItem[]=[];
    totalPrice:number=0;
    totalCount:number=0;
}