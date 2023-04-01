import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { UnitConversionService } from './unit-conversion.service';

const RECIPE_MOCK = [
  {
    id: 1,
    title: 'Honey-Roasted Carrots',
    cookTime: '30 minutes',
    description: '',
    ingredients: [
      { name: 'carrots', quantity: 6, unit: '' },
      { name: 'butter', quantity: 2, unit: 'tablespoons' },
      { name: 'honey', quantity: 2, unit: 'tablespoons' },
      { name: 'salt', quantity: -1, unit: '' },
      { name: 'pepper', quantity: -1, unit: '' },
    ],
    instructions: [
      'Preheat oven to 400ºF (200ºC).',
      'In a medium casserole dish, evenly coat the carrots in butter, honey, salt, and pepper.',
      'Bake for 25-30 minutes.',
      'Enjoy!',
    ],
  },
  {
    id: 2,
    title: 'Caramel Banana Crepes',
    cookTime: '',
    description: '',
    ingredients: [
      { name: 'all-purpose flour', quantity: 2, unit: 'cups' },
      { name: 'eggs', quantity: 3, unit: '' },
      { name: 'butter', quantity: 1 / 4, unit: 'cups' },
      { name: 'sugar', quantity: 3, unit: 'tablespoons' },
      { name: 'milk', quantity: 3, unit: 'cups' },
      { name: 'butter', quantity: 1 / 2, unit: 'cups' },
      { name: 'brown sugar', quantity: 1, unit: 'cups' },
      { name: 'cinnamon', quantity: 1, unit: 'teaspoon' },
      { name: 'banana', quantity: 3, unit: '' },
      { name: 'whipped cream', quantity: -1, unit: '' },
      { name: 'caramel sauce', quantity: -1, unit: '' },
    ],
    instructions: [
      'In a large bowl, combine flour, eggs, butter, and sugar, stirring until ingredients are slightly mixed.',
      'Add the milk ½ cup (120 ml) at a time, stirring vigorously, making sure the milk is completely incorporated into the batter and that the batter is smooth before adding more milk.',
      'Repeat with the rest of the milk. The batter should be very liquidy and have no lumps.',
      'In a pan over medium heat, pour ⅓ cup (95 grams) of the batter in the center and swirl the batter around the edges of the pan until set.',
      'To know when the crepe is ready to flip, lift up one of the edges about ⅓ of the way. The bottom side should be golden brown. Flip the crepe.',
      'Cook until the edges are starting to slightly crisp.',
      'Remove from heat and cover with a paper towel to make sure the crepes stay moist.',
      'In a pan over medium heat, mix the brown sugar and butter until slightly bubbling.',
      'Add the cinnamon and bananas, stirring until bananas are evenly coated with the caramel.',
      'Remove from heat and cool.',
      'Spread half of the banana mixture on half of one crepe.',
      'Fold the other half of the crepe on top of the bananas, then fold the crepe in half.',
      'Repeat with the other crepe.',
      'Serve with whipped cream and a drizzle of caramel sauce.',
      'Enjoy!',
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://your-api-url/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPE_MOCK);
    //return this.http.get<Recipe[]>(this.apiUrl);
  }
}
