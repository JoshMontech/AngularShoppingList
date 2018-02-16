import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addClickedEvent = new EventEmitter<Ingredient>();
  ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  addClicked = (name: string, amount: number) => {
    this.ingredient = {name, amount};
    this.addClickedEvent.emit(this.ingredient);
    console.log(this.ingredient);
  }
}
