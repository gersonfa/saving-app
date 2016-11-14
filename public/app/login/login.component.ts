import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'login-form',
    templateUrl: './app/login/login.component.html'
})
export class LoginFormComponent {
    loading = false;
    error = '';

    userForm : FormGroup;
    usernameCtrl : FormControl;
    passwordCtrl : FormControl;

    constructor(
        private fb : FormBuilder,
        private authenticationService : AuthenticationService,
        private router: Router)
        {
        this.usernameCtrl = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
        this.passwordCtrl = fb.control('', Validators.required);

        this.userForm = fb.group({
            username : this.usernameCtrl,
            password : this.passwordCtrl
        });
    }

    login(){
        this.loading = true;
        this.authenticationService.login(this.usernameCtrl.value, this.passwordCtrl.value)
            .subscribe(result => {
                if(result === true){
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password incorrect';
                    this.loading = false;
                }
            });
    }
}