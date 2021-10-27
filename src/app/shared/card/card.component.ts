import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private chart!: am4charts.XYChart;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let chart = am4core.create("bar-chart-div", am4charts.XYChart);

    chart.data = [{
      "country": "Lithuania",
      "litres": 501
    }, {
      "country": "Czechia",
      "litres": 301
    }, {
      "country": "Ireland",
      "litres": 201
    }, {
      "country": "Germany",
      "litres": 165
    }, {
      "country": "Australia",
      "litres": 139
    }, {
      "country": "Austria",
      "litres": 128
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

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Countries";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Petrol used in litres";
    valueAxis.renderer.minWidth = 10;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Petrol Expenditure";
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";

    series.columns.template.tooltipText = "{name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("rgb(197,62,80)");
    // series.tooltip.background.fill = am4core.color("oragne");
    var bullet = series.bullets.push(new am4charts.LabelBullet());
    bullet.label.text = "{valueY}";
    bullet.label.verticalCenter = "bottom";
    bullet.label.dy = -5;
    bullet.label.fontSize = 10;

    chart.maskBullets = false;

    chart.legend = new am4charts.Legend();
    chart.legend.fontSize = 20;
    this.chart = chart;

    
  }

}
