import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Shish-kebab-MCB.jpg'),
    new Recipe('Another Test Recipe', 'this is also a test', 'https://www.desi-compile.com/wp-content/uploads/2016/11/indianchat2.jpg'),
    new Recipe('A Test Recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Shish-kebab-MCB.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected = (recipe: Recipe) => {
    this.recipeWasSelected.emit(recipe);
  }
}
