import { Component } from '@angular/core';

@Component({
  selector: 'line-chart',
  templateUrl : 'app/charts/line-chart.component.html'
})
export class LineChartComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40, 80], label: 'Octubre'}
  ];
  public lineChartLabels:Array<any> = ['Transporte','Alimentos', 'Vivienda', 'Entretenimiento', 'Servicios', 'Mascota', 'Deudas', 'Familia'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(210,222,218,0.2)',
      borderColor: 'rgba(110,159,144,1)',
      pointBackgroundColor: 'rgba(75,134,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}