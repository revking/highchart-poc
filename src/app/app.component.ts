import { Component } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "HighChart Bar";

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: "bar"
    },
    title: {
      text: "Bar HighChart Sample"
    },
    xAxis: {
      type: "category"
    },

    legend: {
      enabled: true
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true
        }
      }
    },

    series: [
      {
        name: "Things",
        colorByPoint: true,
        data: [
          {
            name: "Animals",
            y: 5,
            drilldown: "animals"
          },
          {
            name: "Fruits",
            y: 2,
            drilldown: "fruits"
          },
          {
            name: "Cars",
            y: 4
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          id: "animals",
          data: [["Cats", 4, "animals2"], ["Dogs", 2], "animals2"],
          keys: ["name", "y", "drilldown"]
        },
        {
          id: "fruits",
          data: [["Apples", 4, "fruits2"], ["Oranges", 6, "fruits2"]],
          keys: ["name", "y", "drilldown"]
        },
        {
          id: "animals2",
          data: [
            ["Cats", 4],
            ["Dogs", 2],
            ["Cows", 1],
            ["Sheep", 2],
            ["Pigs", 1]
          ]
        },
        {
          id: "fruits2",
          data: [["Apples", 4], ["Oranges", 3], ["Peach", 2], ["Grapes", 1]]
        }
      ]
    }
  };
}
