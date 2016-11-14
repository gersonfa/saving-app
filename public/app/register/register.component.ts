import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
    templateUrl:'app/register/register.component.html'
})
export class RegisterUserComponent {
    loading = false;
    error = '';

    userForm : FormGroup;
    passwordCtrl : FormControl;
    emailCtrl : FormControl;
    nameCtrl : FormControl;
    lastnameCtrl : FormControl;
    budgetCtrl : FormControl;
    savingGoalCtrl : FormControl;
    savingMonth : FormControl;

    constructor(
        private fb : FormBuilder,
        private authenticationService : AuthenticationService,
        private router : Router
    ){
        this.emailCtrl = fb.control('', Validators.required);
        this.passwordCtrl = fb.control('', Validators.required);
        this.nameCtrl = fb.control('', Validators.required);
        this.lastnameCtrl = fb.control('', Validators.required);
        this.budgetCtrl = fb.control('', Validators.required);
        this.savingGoalCtrl = fb.control('', Validators.required);
        this.savingMonth = fb.control('', Validators.required);

        this.userForm = fb.group({
            email : this.emailCtrl,
            password : this.passwordCtrl,
            name : this.nameCtrl,
            lastnameCtrl : this.lastnameCtrl,
            budget : this.budgetCtrl,
            savingGoal : this.savingGoalCtrl,
            savingMonth : this.savingMonth
        });
    }

    register(){
        this.authenticationService.register(this.userForm.value)
            .subscribe(result => {
                if(result == true){
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Error, no se pudo registrar usuario nuevo';
                }
            });
    }
}