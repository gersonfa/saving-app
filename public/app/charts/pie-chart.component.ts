import { Component } from '@angular/core';

// webpack html imports

@Component({
  selector: 'pie-chart',
  templateUrl: 'app/charts/pie-chart.component.html'
})
export class PieChartComponent {
  // Pie
  public pieChartLabels:string[] = ['Presupuesto', 'Alimentos', 'Familia'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}