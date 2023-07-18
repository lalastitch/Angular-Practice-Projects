import { Component } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import { IngInfo } from '../data/ing-info';
import { IngredientsDialogComponent } from '../ingredients-dialog/ingredients-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {
  dialogRef!: MatDialogRef<IngredientsDialogComponent>;

  info:IngInfo = {
    ingredients: []
  }
  ingredientInput: string = '';
  recipes!: any[];

  constructor(private spoonacularService: SpoonacularService,private dialog: MatDialog, private router: Router) {}

  searchRecipes() {
    if (this.info.ingredients.length === 0) {
      this.recipes = [];
      return;
    }

    this.spoonacularService.searchRecipesByIngredient(this.info.ingredients).subscribe((data: any) => {
      this.recipes = data;
    });
  }
  addList(){
    if(!this.info.ingredients.includes(this.ingredientInput)){
      this.info.ingredients.push(this.ingredientInput);
    }
  }
  openResultDialog(info:IngInfo) :void {
    this.dialogRef = this.dialog.open(IngredientsDialogComponent, {
      width: '400px',
      data:info
    });
    console.log(this.info.ingredients);

    // this.dialogRef.afterClosed().subscribe((result: IngInfo ) => {
    //   this.info.ingredients = result.ingredients;
    //   console.log(result.ingredients);
    // });
    
  }

  
}