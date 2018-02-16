import { Recipe } from './../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('burger', 'the classic', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Shish-kebab-MCB.jpg', [
      new Ingredient('buns', 2),
      new Ingredient('burger', 1)
    ]),
    new Recipe('taco', 'south of the border', 'https://www.desi-compile.com/wp-content/uploads/2016/11/indianchat2.jpg', [
      new Ingredient('shell', 1),
      new Ingredient('pico', 1)
    ]),
    new Recipe('pasta', 'italiano', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Shish-kebab-MCB.jpg', [
      new Ingredient('pasta', 1),
      new Ingredient('sauce', 2)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
