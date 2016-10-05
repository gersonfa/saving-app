import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { User} from '../_models/user';
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
                let user = response.json() && response.json().user;
                if(token){
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ 
                        token: token, 
                        email : email, 
                        name : user.name + ' ' + user.lastname,
                        budget : user.budget,
                        savingGoal : user.savingGoal,
                        savingMonth : user.savingMonth
                     }));
                    return true;
                } else {
                    return false;
                }
            });
    }

    userInfoUpdate(user): Observable<boolean>{
        let headers = new Headers({
            'Authorization': this.token,
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({headers:headers});

        return this.http.post('/api/user', JSON.stringify({
            name : user.name,
            lastname : user.lastname,
            budget : user.budget,
            savingGoal : user.savingGoal,
            savingMonth : user.savingMonth
        }), options)
            .map((response : Response) => {
                let user = response.json() && response.json().user;
                if(user){
                    localStorage.setItem('currentUser', JSON.stringify({ 
                        token: this.token, 
                        email : user.email, 
                        name : user.name + ' ' + user.lastname,
                        budget : user.budget,
                        savingGoal : user.savingGoal,
                        savingMonth : user.savingMonth
                     }));
                    return true;
                } else {
                    return false;
                }
            });
    }
}