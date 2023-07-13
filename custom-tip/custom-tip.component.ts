import { Component } from '@angular/core';
import {TipCalc} from '../data/tip-calc-form';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-tip',
  templateUrl: './custom-tip.component.html',
  styleUrls: ['./custom-tip.component.css']
})
export class CustomTipComponent {
  constructor(private route: ActivatedRoute) { }

  billprev:TipCalc = {
    bill: 0,
    tipAmount: 0,
    tipTotal: 0
  };
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.billprev.bill = +params.get('bill')!;
    });
  }
  calculateTip() {
    const billAmount = parseFloat(this.billprev.bill.toString());
    const tip = parseFloat(this.billprev.tipAmount.toString());
    this.billprev.tipTotal = billAmount + tip ;

    this.billprev.tipAmount = parseFloat(this.billprev.tipAmount.toFixed(2));
    this.billprev.tipTotal = parseFloat(this.billprev.tipTotal.toFixed(2));
  }

  
}
