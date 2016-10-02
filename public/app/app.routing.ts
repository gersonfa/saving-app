import { Routes, RouterModule} from '@angular/router';
import { LoginFormComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { ExpenseFormCreate } from './expense/index';
import { AuthGuard } from './_guards/index';

export const ROUTES: Routes = [
    { path: 'login', component: LoginFormComponent},
    { path: '', component: HomeComponent, canActivate:[AuthGuard]},
    { path: 'expense/create', component: ExpenseFormCreate, canActivate:[AuthGuard]},
    //Otherwise redirect to home
    { path : '**', redirectTo: ''}
];

