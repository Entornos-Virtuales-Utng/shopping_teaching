import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path:'',
        component: ProductListComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
