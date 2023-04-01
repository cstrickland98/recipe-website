import { Component, Input } from '@angular/core';
import { Ingredient } from '../models/recipe.model';
import { UnitConversionService } from '../services/unit-conversion.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss'],
})
export class IngredientsListComponent {
  @Input() ingredients!: { [key: string]: number };

  getUnit(ingredientKey: string): string {
    return ingredientKey.slice(
      ingredientKey.indexOf('(') + 1,
      ingredientKey.indexOf(')')
    );
  }

  getIngredientName(ingredientKey: string): string {
    return ingredientKey.substring(0, ingredientKey.indexOf(' ('));
  }

  encodeURIComponent(name: string): string {
    return encodeURIComponent(name);
  }
}
