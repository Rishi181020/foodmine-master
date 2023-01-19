import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }
  getAllFoodsBySearchTerm(SearchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(SearchTerm.toLowerCase()))
  }

  getFoodById(foodId:string){
    return this.getAll().find(food=>food.id==foodId)?? new Food();
  }
  
  getAlltags():Tag[]{
    return sample_tags;
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag=="All"?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));
  }
}
