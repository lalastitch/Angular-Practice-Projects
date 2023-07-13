import { Component } from '@angular/core';
import {TipCalc} from '../data/tip-calc-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip-calulator',
  templateUrl: './tip-calulator.component.html',
  styleUrls: ['./tip-calulator.component.css']
})
export class TipCalulatorComponent {
  constructor(private router: Router) { }

  billprev:TipCalc = {
    bill: 0,
    tipAmount: 0,
    tipTotal: 0
  };

  calculateTip(tipPercentage: number) {
    this.billprev.tipAmount = (tipPercentage * this.billprev.bill) / 100;
    const billAmount = parseFloat(this.billprev.bill.toString());
    const tip = parseFloat(this.billprev.tipAmount.toString());
    this.billprev.tipTotal = billAmount + tip ;

    this.billprev.tipAmount = parseFloat(this.billprev.tipAmount.toFixed(2));
    this.billprev.tipTotal = parseFloat(this.billprev.tipTotal.toFixed(2));
  }

  customTip(){
    // Navigate to NewComponent with the billAmount as a route parameter
    this.router.navigate(['/custom-tip', this.billprev.bill]);
  }

}
