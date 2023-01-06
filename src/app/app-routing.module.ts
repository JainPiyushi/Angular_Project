import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
// import { ParentComponent } from './parent/parent.component';
// import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
// import { AuthGuard } from './services/authorization/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'emp', component: EmpComponent, canActivate: [AuthGuard] },
 
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  
  { path: 'products', component: ProductsComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'order-placed', component: OrderPlacedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

