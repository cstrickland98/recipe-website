export interface Recipe {
  id: number;
  title: string;
  cookTime: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  selected?: boolean;
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}
