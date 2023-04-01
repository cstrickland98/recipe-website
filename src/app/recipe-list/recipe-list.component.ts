import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';
import { MatDialog } from '@angular/material/dialog';
import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  masterIngredientsList: { [key: string]: number } = {};
  searchText: string = '';
  filteredRecipes: Recipe[] = [];
  showSelectedOnly: boolean = false;

  constructor(private recipeService: RecipeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.filteredRecipes = recipes;
    });
  }

  searchRecipes(): void {
    if (this.searchText) {
      this.filteredRecipes = this.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredRecipes = this.recipes;
    }

    if (this.showSelectedOnly) {
      this.filteredRecipes = this.filteredRecipes.filter(
        (recipe) => recipe.selected
      );
    }
  }

  toggleSelectedRecipes(): void {
    this.showSelectedOnly = !this.showSelectedOnly;
    this.searchRecipes();
  }

  deselectAllRecipes(): void {
    for (const recipe of this.recipes) {
      if (recipe.selected) {
        recipe.selected = false;
        this.updateMasterIngredientsList(recipe);
      }
    }
    this.searchRecipes();
  }

  anyRecipeSelected(): boolean {
    return this.recipes.some((recipe) => recipe.selected);
  }

  openRecipeModal(recipe: Recipe): void {
    const dialogRef = this.dialog.open(RecipeModalComponent, {
      data: recipe,
    });

    dialogRef.afterClosed().subscribe((selected) => {
      if (selected) {
        recipe.selected = !recipe.selected;
        this.updateMasterIngredientsList(recipe);
      }
    });
  }

  updateMasterIngredientsList(recipe: Recipe): void {
    for (const ingredient of recipe.ingredients) {
      const key = `${ingredient.name} (${ingredient.unit})`;
      const ingredientListValue = this.masterIngredientsList[key];
      const recipeIngredientValue = ingredient.quantity;

      if (this.masterIngredientsList[key]) {
        if (!recipe.selected) {
          if (ingredientListValue - recipeIngredientValue === 0) {
            delete this.masterIngredientsList[key];
            continue;
          }
        }
        recipe.selected
          ? (this.masterIngredientsList[key] += ingredient.quantity)
          : (this.masterIngredientsList[key] -= ingredient.quantity);
      } else {
        this.masterIngredientsList[key] = recipe.selected
          ? ingredient.quantity
          : 0;
      }
    }
  }
}
