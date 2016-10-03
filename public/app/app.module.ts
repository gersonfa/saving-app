import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login.component';
import { HomeComponent } from './home/index';
import { ExpenseFormCreate, ExpenseComponent } from './expense/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService, ExpenseService} from './_services/index';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { AuthGuard } from './_guards/index';
import { NgSemanticModule } from 'ng-semantic';


@NgModule({
    imports: [BrowserModule, NgSemanticModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(ROUTES)],
    declarations: [AppComponent, LoginFormComponent, HomeComponent, ExpenseFormCreate, ExpenseComponent],
    providers: [AuthenticationService, ExpenseService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule {

}