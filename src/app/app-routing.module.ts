import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroceryListComponent } from'./grocery-list/grocery-list.component';
import { RPSComponent } from './rps/rps.component';
import { WeatherDashboardComponent } from './weather/weather.component';
import { TipCalulatorComponent } from './tip-calulator/tip-calulator.component';
import { CustomTipComponent } from './custom-tip/custom-tip.component';
import {ViewRecipesComponent } from './view-recipes/view-recipes.component';

const routes: Routes = [
  { path: 'grocery-list', component: GroceryListComponent },
  { path: 'rps', component: RPSComponent },
  { path: 'weather', component: WeatherDashboardComponent },
  { path: 'tip-calculator', component: TipCalulatorComponent},
  { path: 'custom-tip/:bill', component: CustomTipComponent  },
  { path: 'view-recipes/:title', component: ViewRecipesComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

