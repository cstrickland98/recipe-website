import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.scss'],
})
export class RecipeModalComponent {
  constructor(
    public dialogRef: MatDialogRef<RecipeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public recipe: Recipe
  ) {}

  close(selected: boolean): void {
    this.dialogRef.close(selected);
  }
}
