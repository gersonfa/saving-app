import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(email, password): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        return this.http.post('/api/auth/login', JSON.stringify({email: email, password:password}), options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if(token){
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({email:email, token: token }));
                    return true;
                } else {
                    return false;
                }
            });
    }
}