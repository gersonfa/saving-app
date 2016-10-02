import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './index';
import { Expense } from '../_models/expense';

@Injectable()
export class ExpenseService {
    constructor(
        private authenticationService: AuthenticationService,
        private http: Http
    ){}

    getExpenses(): Observable<Expense[]>{
        let headers = new Headers({'Authorization': this.authenticationService.token});
        let options = new RequestOptions({headers:headers});

        return this.http.get('/api/expense', options)
            .map((response: Response) => response.json());
    }

    createExpense(body: Object): Observable<Expense[]>{
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
                    return expense;
                } else {
                    return null;
                }
            });

    }
}