import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipCalulatorComponent } from './tip-calulator/tip-calulator.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { RPSComponent } from './rps/rps.component';
import { WeatherComponent } from './weather/weather.component';
import { CustomTipComponent } from './custom-tip/custom-tip.component';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TipCalulatorComponent,
    GroceryListComponent,
    RPSComponent,
    WeatherComponent,
    CustomTipComponent,
    ResultDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
