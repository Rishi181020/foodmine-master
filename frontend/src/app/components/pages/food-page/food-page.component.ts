import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  food!:Food;
  constructor(activatedroute:ActivatedRoute,foodservice:FoodService,private cartService:CartService,private router:Router){
    activatedroute.params.subscribe((params)=>{
      if(params.id){
        this.food=foodservice.getFoodById(params.id)
      }

    })
  }

  ngOnInit(): void {  
  }

  addToCart(){
    this.cartService.addtoCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
