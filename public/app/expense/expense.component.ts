import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../_services/index';
import { Expense } from '../_models/expense';
@Component({
    selector: 'ng-expense',
    templateUrl: 'app/expense/expense.component.html'
})
export class ExpenseComponent implements OnInit {
    expenses: Expense[] = [];
    
    constructor(
        private expenseService : ExpenseService
    ){}

    ngOnInit(){
        this.expenseService.getExpenses()
            .subscribe(response => {
                if(response){
                    this.expenses = this.expenseService.expenses;
                }
            })
    }

    updateExpenses(){
        this.expenses = this.expenseService.expenses;
    }

    expenseDelete(expense : Expense){
        this.expenseService.deleteExpense(expense)
            .subscribe(response => {
                if (response){
                    console.log('Gasto eliminado')
                    this.expenses = this.expenseService.expenses;
                }
            })
        
    }

}