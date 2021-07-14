import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Maple Syrup']
    },
    {
      id: 'r2',
      title: 'Beef',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['Beef', 'Pork Meat', 'Maple Syrup']
    }];
  constructor() { }

  getRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
        ...this.recipes.find(recipe => recipe.id === recipeId)
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
