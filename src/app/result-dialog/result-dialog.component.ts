import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogInfo } from '../data/dialog-info';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogInfo,
  private dialogRef: MatDialogRef<ResultDialogComponent>) {}
  
  close():void{
    this.dialogRef.close();
  }
}
