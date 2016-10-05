import { Routes, RouterModule} from '@angular/router';
import { LoginFormComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { ExpenseFormCreate, ExpenseComponent } from './expense/index';
import { AuthGuard } from './_guards/index';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes = [
    { path: 'login', component: LoginFormComponent},
    { path: '', component: HomeComponent, canActivate:[AuthGuard], children : [
        { path: '', component: ExpenseComponent },
        { path : 'user', component : UserComponent}
    ]},
    { path: 'expense/create', component: ExpenseFormCreate, canActivate:[AuthGuard]},
    //Otherwise redirect to home
    { path : '**', redirectTo: ''}
];

