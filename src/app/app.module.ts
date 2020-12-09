import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HighchartsChartComponent } from 'highcharts-angular';
import {PiechartComponent} from 'src/app/piechart/piechart.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'piechart', component: PiechartComponent},
      //{path: 'barchart', component: HighchartsChartComponent}
    ]),
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
