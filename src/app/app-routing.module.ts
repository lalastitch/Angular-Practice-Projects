import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroceryListComponent } from'./grocery-list/grocery-list.component';
import { RPSComponent } from './rps/rps.component';
import { WeatherDashboardComponent } from './weather/weather.component';
import { TipCalulatorComponent } from './tip-calulator/tip-calulator.component';
import { CustomTipComponent } from './custom-tip/custom-tip.component';

const routes: Routes = [
  { path: 'grocery-list', component: GroceryListComponent },
  { path: 'rps', component: RPSComponent },
  { path: 'weather', component: WeatherDashboardComponent },
  { path: 'tip-calculator', component: TipCalulatorComponent},
  { path: 'custom-tip/:bill', component: CustomTipComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

