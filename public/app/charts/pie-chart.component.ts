import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../_services/index';

@Component({
  selector: 'pie-chart',
  templateUrl: 'app/charts/pie-chart.component.html'
})
export class PieChartComponent implements OnInit {
  monthsNames : string[] = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  date : any = new Date;
  month : string = this.monthsNames[this.date.getMonth()];

  data: number[] = [0,0,0,0,0,0,0,0];
  dataAvailable: boolean = false;

  constructor(
    private expenseService : ExpenseService
  ){}

  ngOnInit(){
    this.expenseService.getExpenses()
      .subscribe(response => {
        if (response){
          this.expenseService.expenses
          .forEach( x => {
            let dateExpense = new Date(x.createdAt);
            let monthExpense = this.monthsNames[dateExpense.getMonth()];
            if (monthExpense === this.month){
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
            }
          })
        }
      })

    this.dataAvailable = true;
  }
  // Pie
  public pieChartLabels:string[] = ['Transporte','Alimentos', 'Vivienda', 'Entretenimiento', 'Servicios', 'Mascota', 'Deudas', 'Familia'];
  public pieChartData:number[] = this.data;
  public pieChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}