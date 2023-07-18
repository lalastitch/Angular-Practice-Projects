import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IngInfo } from '../data/ing-info';

@Component({
  selector: 'app-ingredients-dialog',
  templateUrl: './ingredients-dialog.component.html',
  styleUrls: ['./ingredients-dialog.component.css']
})
export class IngredientsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IngInfo,
  private dialogRef: MatDialogRef<IngredientsDialogComponent>) {}
  
  close():void{
    console.log(this.data.ingredients);
    this.dialogRef.close(this.data.ingredients);
  }

  remove(ing:string):void{
    this.data.ingredients = this.data.ingredients.filter(item => item != ing);
  }
}
