import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';
import { DialogInfo } from '../data/dialog-info';

@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.css']
})
export class RPSComponent {
  constructor(private dialog: MatDialog) {}

  info:DialogInfo = {
    result:"",
    url:""
  }

  player(choice:string){
    const options = ["rock", "paper", "scissor"];
    const compChoice = options[Math.floor(Math.random()*options.length)];
    if (choice.localeCompare(compChoice) == 0){ // tie

      this.info.result = "You Tied";
      this.info.url = ".\resultImages\tie.jpg";

    } else if (choice.localeCompare("rock") == 0 && compChoice.localeCompare("paper") == 0){ // player rock lost

      this.info.result = "You Lost!";
      this.info.url = ".\resultImages\rockLoses.jpg";

    }  else if (choice.localeCompare("rock") == 0 && compChoice.localeCompare("scissor") == 0){ //  player rock won

      this.info.url = ".\resultImages\scissorsLosing.jpg";
      this.info.result = "You Won!";

    } else if (choice.localeCompare("scissor") == 0 && compChoice.localeCompare("rock") == 0){ // player scissor lost

      this.info.result = "You Lost!";
      this.info.url = ".\resultImages\scissorsLosing.jpg";

    }  else if (choice.localeCompare("scissor") == 0 && compChoice.localeCompare("paper") == 0){ //  player scissor won

      this.info.url = ".\resultImages\paperLoses.jpg";
      this.info.result = "You Won!";

    }  else if (choice.localeCompare("paper") == 0 && compChoice.localeCompare("scissor") == 0){ // player paper lost

      this.info.result = "You Lost!";
      this.info.url = ".\resultImages\paperLoses.jpg";

    }  else if (choice.localeCompare("paper") == 0 && compChoice.localeCompare("rock") == 0){ //  player paper won

      this.info.result = "You Won!";
      this.info.url = ".\resultImages\rockLoses.jpg";

    }  
    
    this.openResultDialog(this.info);

  }

  openResultDialog(info:DialogInfo) :void {
    this.dialog.open(ResultDialogComponent, {
      width: '800px',
      data:{info}
    });
  }
}
