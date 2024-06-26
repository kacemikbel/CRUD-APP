import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [ 
    {
        path: '', component:LayoutComponent,
        children: [
            {path: '', redirectTo : "login", pathMatch :"full"},
            {path: 'home', component : HomeComponent},
            {path: 'login', component : LoginComponent},
            {path: 'register', component : RegisterComponent}
        ]
    }

];