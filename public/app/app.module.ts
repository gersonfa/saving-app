import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { UserComponent } from './user/index';
import { ExpenseFormCreate, ExpenseComponent } from './expense/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService, ExpenseService} from './_services/index';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { AuthGuard } from './_guards/index';
import { NgSemanticModule } from 'ng-semantic';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LineChartComponent } from './charts/index';


@NgModule({
    imports: [BrowserModule, NgSemanticModule, FormsModule, ReactiveFormsModule, HttpModule, ChartsModule, RouterModule.forRoot(ROUTES)],
    declarations: [AppComponent, LoginFormComponent, HomeComponent, UserComponent, ExpenseFormCreate, ExpenseComponent, LineChartComponent],
    providers: [AuthenticationService, ExpenseService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule {

}