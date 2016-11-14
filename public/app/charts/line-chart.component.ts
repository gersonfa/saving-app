import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../_services/index';
import { Expense } from '../_models/expense';

@Component({
  selector: 'line-chart',
  templateUrl : 'app/charts/line-chart.component.html'
})
export class LineChartComponent implements OnInit {
  expenses: Expense[] = [];
  data: number[] = [0,0,0,0,0,0,0,0];
  

  constructor(
    private expenseService : ExpenseService
  ){}

  ngOnInit(){
    this.expenseService.getExpenses()
      .subscribe(response => {
        if(response){
          this.expenseService.expenses.forEach(x => {
            console.log(x.category);
            switch (x.category) {
              case 'Transporte' :
                this.data[0] += x.amount;
                break;
              case 'Alimentos' :
                this.data[1] += x.amount;
                break;
              case 'Vivienda' :
                this.data[2] += x.amount;
                break;
              case 'Entretenimiento' :
                this.data[3] += x.amount;
                break;
              case 'Servicios' :
                this.data[4] += x.amount;
                break;
              case 'Mascota' :
                this.data[5] += x.amount;
                break;
              case 'Deudas' :
                this.data[6] += x.amount;
                break;
              case 'Familia' :
                this.data[7] += x.amount;
                default:
                  break;
            }
          });
        }
      })
      
  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: this.data, label: 'Gastos'}
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