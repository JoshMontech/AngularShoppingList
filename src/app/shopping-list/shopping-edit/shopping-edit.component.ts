import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() { }

  addClicked(name: string, amount: number) {
    this.shoppingListService.addIngredient({name, amount});
    }
}
