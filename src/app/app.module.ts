import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HighchartsChartComponent } from "highcharts-angular";

import { AppComponent } from "./app.component";
import { from } from "rxjs";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HighchartsChartComponent,
    RouterModule.forRoot([
      //{path: 'barchart', component: HighchartsChartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
