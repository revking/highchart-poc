import { Component } from "@angular/core";
import * as Highcharts from "highcharts";
import Drilldown from "highcharts/modules/drilldown";

Drilldown(Highcharts);

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "HighChart";
  highcharts = Highcharts;

  chartOptions = {
    chart: {
      // styledMode: true
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    title: {
      text: "Pie HighCharts Sample"
    },
    tooltip: {
      pointFormat: "{point.name}:<b>{point.percentage:.1f}%</b>"
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        size: 200,
        animation: {
          duration: 1000
        },
        dataLabels: {
          enabled: true,
          padding: 0,
          format: "{point.name}</b>:{point.percentage:.1f} %",
          style: {
            color: Highcharts.theme || "black"
          }
        },
        showInLegend: true
      }
    },

    series: [
      {
        name: "Things",
        colorByPoint: true,
        data: [
          {
            name: "dropdown54",
            y: 5,
            drilldown: "animals"
          },

          {
            name: "Animals",
            y: 2,
            drilldown: "animals"
          },

          {
            name: "Animals",
            y: 2,
            drilldown: "animals"
          },

          {
            name: "Animals",
            y: 2,
            drilldown: "animals"
          },

          {
            name: "Animals",
            y: 2,
            drilldown: "animals"
          },

          {
            name: "Animals",
            y: 2,
            drilldown: "animals"
          },

          {
            name: "Animals",
            y: 2,
            drilldown: "animals"
          },

          {
            name: "Animals",
            y: 2,
            drilldown: "animals"
          },

          {
            name: "Animals",
            y: 2,

            drilldown: "animals"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,
            dataLabels: {
              padding: 0
            },
            drilldown: "fruits"
          },
          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },
          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,

            drilldown: "fruits"
          },

          {
            name: "Fruits",
            y: 2,
            dataLabels: {
              padding: 0
            },
            drilldown: "fruits"
          },

          {
            name: "Cars",
            y: 4,
            dataLabels: {
              padding: 0
            }
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
