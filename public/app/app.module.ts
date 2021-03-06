import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login.component';
import { RegisterUserComponent } from './register/register.component';
import { HomeComponent } from './home/index';
import { LoginHomeComponent } from './loginhome/index';
import { UserComponent } from './user/index';
import { ExpenseFormCreate, ExpenseComponent } from './expense/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService, ExpenseService} from './_services/index';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { AuthGuard } from './_guards/index';
import { NgSemanticModule } from 'ng-semantic';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LineChartComponent, PieChartComponent } from './charts/index';
//import { InfoComponent } from './info/info.component';


@NgModule({
    imports: [BrowserModule, NgSemanticModule, FormsModule, ReactiveFormsModule, HttpModule, ChartsModule, RouterModule.forRoot(ROUTES)],
    declarations: [AppComponent, LoginFormComponent, RegisterUserComponent, HomeComponent, LoginHomeComponent, UserComponent, ExpenseFormCreate, ExpenseComponent, LineChartComponent, PieChartComponent],
    providers: [AuthenticationService, ExpenseService, AuthGuard],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})

export class AppModule {

}