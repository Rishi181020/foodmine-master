import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  foods:Food[]=[];
  constructor(foodservice:FoodService, activatedroute:ActivatedRoute){
    activatedroute.params.subscribe((params)=>{
      if(params.searchTerm){
        this.foods=foodservice.getAllFoodsBySearchTerm(params.searchTerm);
      }
      else if(params.tag){
        this.foods=foodservice.getAllFoodsByTag(params.tag); 
      }
      else this.foods=foodservice.getAll();
    })
  }

  ngOnInit(): void {
      
  }

}
