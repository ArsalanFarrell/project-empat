import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe ('Cacio e Pepe',
    // tslint:disable-next-line:max-line-length
    'Cacio e Pepe is a pasta dish from Roman cuisine. "Cacio e Pepe" means "cheese and pepper" in several central Italian dialects. As the name suggests, the ingredients of the dish are very simple and include only black pepper, Pecorino Romano cheese, and pasta.',
    'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Cacio-e-Pepe_TASTING-ROME.jpg?itok=2_G8NiJG',
    [
      new Ingredient('meal', 1),
      new Ingredient('spaghetti', 1),
      new Ingredient('cheese', 1),
      new Ingredient('blackpepper', 1)
    ]),
    new Recipe ('Ribeye Steak',
    // tslint:disable-next-line:max-line-length
    'Ribeye steaks are steaks that are cut from the beef rib primal cut. And oh, are they tender. And juicy. And flavorful, with just the right amount of fat.',
    '../src/app/img/AUSTRALIA-WAGYU-RIBEYE-STEAK.jpg',
    [
      new Ingredient('meat', 1),
      new Ingredient('meal', 2),
      new Ingredient('salt', 1),
      new Ingredient('blackpepper', 1)
    ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients: Ingredient[]) {
    this.slsService.addIngredients(ingredients);
  }
constructor(private slsService: ShoppingListService) { }

}
