import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MarketComponent } from './market/market.component';
import { CompaniesComponent } from './companies/companies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: MainComponent },
  {path: 'market', component: MarketComponent },
  {path: 'companies', component: CompaniesComponent },
  {path: 'about', component: AboutComponent },
  {path: 'feedback', component: FeedbackComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MarketComponent,
    CompaniesComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
