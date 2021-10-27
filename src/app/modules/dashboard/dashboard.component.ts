import { Component, OnInit, NgZone } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private chart!: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.zone.runOutsideAngular( () => {
      let chart = am4core.create("chartdiv",am4charts.XYChart);
      let title = chart.titles.create();
      title.text = "Product sales by area";

      let chart1 = am4core.create("piediv", am4charts.PieChart);


      let data = [
        { "area": "florida", "computers": 3025, "cars":230, "boats":930 }, 
        { "area": "guiana", "computers": 305, "cars":290, "boats":476 }, 
        { "area": "manchester", "computers": 2625, "cars":390, "boats":220 }, 
        { "area": "oval", "computers": 1705, "cars":179, "boats":870 }, 
        { "area": "leeds", "computers": 1725, "cars":890, "boats":170 }
      ];

      chart1.data = [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }];
      
      chart.data = data;
      
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.title.text = "Area";
      categoryAxis.dataFields.category = "area";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Sales";
      valueAxis.renderer.minWidth = 20;

      let seriesNames = ["computers", "cars", "boats"];
      for(let i =0; i<3; i++){
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.categoryX = "area";
        series.dataFields.valueY = seriesNames[i];
        series.name = seriesNames[i];

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.tooltipText = "Area :{categoryX} n\ sales: {valueY} {name}";
      }
      chart.legend = new am4charts.Legend();
      this.chart = chart;

      let pieSeries = chart1.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";

    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.zone.runOutsideAngular( () => {
      if(this.chart) {
        this.chart.dispose();
      }
    })
  }
}
