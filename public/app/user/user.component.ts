import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/index';

@Component({
    templateUrl: 'app/user/user.component.html'
})
export class UserComponent{
    loading = false;
    error = '';
    success = '';

    userForm : FormGroup;

    nameCtrl : FormControl;
    lastnameCtrl : FormControl;
    budgetCtrl : FormControl;
    savingGoalCtrl : FormControl;
    savingMonthCtrl : FormControl;

    constructor(
        private fb: FormBuilder,
        private authenticationService: AuthenticationService
    ){
        this.nameCtrl = fb.control('', Validators.required);
        this.lastnameCtrl = fb.control('', Validators.required);
        this.budgetCtrl = fb.control('', Validators.required);
        this.savingGoalCtrl = fb.control('', Validators.required);
        this.savingMonthCtrl = fb.control('', Validators.required);

        this.userForm = fb.group({
            name : this.nameCtrl,
            lastname : this.lastnameCtrl,
            budget : this.budgetCtrl,
            savingGoal : this.savingGoalCtrl,
            savingMonth : this.savingMonthCtrl
        });
    }

    updateUser(){
        this.loading = false;
        this.authenticationService.userInfoUpdate(this.userForm.value)
            .subscribe(result => {
                if (result === true) {
                    console.log('actualizado correctamente');
                } else {
                    console.log('error');
                }
            });
    }
}