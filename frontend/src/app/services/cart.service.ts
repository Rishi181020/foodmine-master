import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=this.getCartLocalStorage();
  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart);
  constructor() { }

  addtoCart(food:Food): void{
    let cartItem=this.cart.Items.find(item=>item.food.id==food.id)
    if(cartItem)
    return;
    this.cart.Items.push(new CartItem(food));
    this.setCartLocalStorage();
    }
  
  removeFromCart(foodId:string):void{
    this.cart.Items=this.cart.Items.filter(item=>item.food.id!=foodId);
    this.setCartLocalStorage();
  }  

  changeQuantity(foodId:string,quantitiy:number){
    let cartItem=this.cart.Items.find(item=>item.food.id=foodId);
    if (!cartItem) return;
    cartItem.quantitiy=quantitiy;
    cartItem.price=quantitiy*cartItem.food.price;
    this.setCartLocalStorage();
  }

  clearCart(){
    this.cart=new Cart;
    this.setCartLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartLocalStorage():void{
    this.cart.totalPrice=this.cart.Items.reduce((prevSum,currentItem)=>prevSum+currentItem.price,0);
    this.cart.totalCount=this.cart.Items.reduce((prevSum,currentItem)=>prevSum+currentItem.price,0);
    const cartJson=JSON.stringify(this.cart);
    localStorage.setItem('cart',cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartLocalStorage():Cart{
    const cartJson=localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson):new Cart();
  }
}
