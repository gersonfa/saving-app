import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpenseService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'expense-create',
    templateUrl: 'app/expense/expense-create.component.html'
})
export class ExpenseFormCreate{
    loading = false;
    error = '';

    expenseForm : FormGroup;
    categoryCtrl : FormControl;
    descriptionCtrl : FormControl;
    amountCtrl : FormControl;

    constructor(
        private fb: FormBuilder,
        private expenseService: ExpenseService,
        private router: Router
    ){
        this.categoryCtrl = fb.control('', Validators.required);
        this.descriptionCtrl = fb.control('', Validators.compose([Validators.required, Validators.minLength(8)]));
        this.amountCtrl = fb.control('', Validators.required);

        this.expenseForm = fb.group({
            category : this.categoryCtrl,
            description : this.descriptionCtrl,
            amount : this.amountCtrl
        });
    }
    

    createExpense(){
        this.expenseService.createExpense(this.expenseForm.value)
            .subscribe(result => {
                if(result){
                    console.log(result);
                }
            })
    }

    
}