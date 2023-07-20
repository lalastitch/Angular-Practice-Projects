import { Component } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import { IngInfo } from '../data/ing-info';
import { IngredientsDialogComponent } from '../ingredients-dialog/ingredients-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ViewRecipesComponent } from '../view-recipes/view-recipes.component';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {
  dialogRef!: MatDialogRef<IngredientsDialogComponent>;

  ingList: IngInfo[] = [];
  recipes!: any[];
  filter:string = "";

  constructor(private spoonacularService: SpoonacularService,private dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    this.searchRecipes();
  }

  filteredRecipes(){
    this.spoonacularService.searchRecipesByFilter(this.filter).subscribe((data: any) => {
      this.recipes = data.recipes;
      console.log(this.recipes);
    });
  }

  searchRecipes() {
    this.filter = "";
    this.spoonacularService.searchRecipesByIngredient().subscribe((data: any) => {
      this.recipes = data.recipes;
      console.log(this.recipes);
    });
    console.log(this.recipes);
  }

  addToList(title: string, ing: any[]) {
    const newIngInfo = new IngInfo(title, ing);
    this.ingList.push(newIngInfo);
  }

  removeRecipe(title:string){
    this.ingList = this.ingList.filter((ingInfo: IngInfo) => ingInfo.title !== title);
  }

  removeIng(ing:string, title:string){
    this.ingList.forEach((ingredientInfo) => {
      if (ingredientInfo.title === title) {
        // Find the index of the ingredient in the ingredients array
        const index = ingredientInfo.ingredients.findIndex((ingredient) => ingredient.name === ing);
        if (index !== -1) {
          // Remove the ingredient from the ingredients array
          ingredientInfo.ingredients.splice(index, 1);
        }
      }
    });
  }

  viewInstruction(inst:string){
    this.dialog.open(IngredientsDialogComponent, {
      data:inst
    });
  }
}