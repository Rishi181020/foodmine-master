"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var Cart_1 = require("../shared/models/Cart");
var CartItem_1 = require("../shared/models/CartItem");
var CartService = /** @class */ (function () {
    function CartService() {
        this.cart = new Cart_1.Cart;
        this.cartSubject = new rxjs_1.BehaviorSubject(this.cart);
    }
    CartService.prototype.addtoCart = function (food) {
        var cartItem = this.cart.Items.find(function (item) { return item.food.id == food.id; });
        if (cartItem)
            return;
        this.cart.Items.push(new CartItem_1.CartItem(food));
    };
    CartService.prototype.removeFromCart = function (foodId) {
        this.cart.Items = this.cart.Items.filter(function (item) { return item.food.id != foodId; });
    };
    CartService.prototype.changeQuantity = function (foodId, quantitiy) {
        var cartItem = this.cart.Items.find(function (item) { return item.food.id = foodId; });
        if (!cartItem)
            return;
        cartItem.quantitiy = quantitiy;
        cartItem.price = quantitiy * cartItem.food.price;
    };
    CartService.prototype.clearCart = function () {
        this.cart = new Cart_1.Cart;
    };
    CartService.prototype.getCartObservable = function () {
        return this.cartSubject.asObservable();
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
