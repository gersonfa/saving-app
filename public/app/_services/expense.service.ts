import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './index';
import { Expense } from '../_models/expense';

@Injectable()
export class ExpenseService {
    public expenses: Expense[];

    constructor(
        private authenticationService: AuthenticationService,
        private http: Http
    ){}

    getExpenses(): Observable<Boolean>{
        let headers = new Headers({'Authorization': this.authenticationService.token});
        let options = new RequestOptions({headers:headers});

        return this.http.get('/api/expense', options)
            .map((response: Response) => {
                this.expenses = response.json();
                if(this.expenses){
                    return true;
                } else {
                    return false;
                }
            });
    }

    createExpense(body: Object): Observable<Boolean>{
        let bodyString = JSON.stringify(body);
        let headers = new Headers({
            'Authorization': this.authenticationService.token,
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({headers:headers});

        return this.http.post('/api/expense', bodyString, options)
            .map((response: Response) => {
                let expense = response.json();
                if(expense){
                    this.expenses.push(expense);
                    return true;
                } else {
                    return false;
                }
            });

    }
}