import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { InfographicComponent } from './components/infographic/infographic.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { OrganizationDashboardComponent } from './components/organization-dashboard/organization-dashboard.component';
import {AuthGuardService} from "./services/auth-guard.service";
const appRoutes: Routes=[
  {path:'',component:BodyComponent,canActivate: [AuthGuardService]},
  {path:'dashboard',component:OrganizationDashboardComponent,canActivate: [AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    NavbarComponent,
    BodyComponent,
    LoginComponent,
    RegisterComponent,
    InfographicComponent,
    OrganizationDashboardComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      RouterModule.forRoot(appRoutes,{enableTracing:true})
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
