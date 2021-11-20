import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerAreaComponent } from './components/customer-area/customer-area.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { AddCustomerComponent } from './components/AdminFunctions/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './components/AdminFunctions/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/AdminFunctions/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from './components/AdminFunctions/get-one-customer/get-one-customer.component';
import { UpdateCustomerComponent } from './components/AdminFunctions/update-customer/update-customer.component';
import { CustomerAuthGuardService } from './services/customer-auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AddCompanyComponent } from './components/AdminFunctions/add-company/add-company.component';
import { DeleteCompanyComponent } from './components/AdminFunctions/delete-company/delete-company.component';
import { UpdateCompanyComponent } from './components/AdminFunctions/update-company/update-company.component';
import { GetAllCompaniesComponent } from './components/AdminFunctions/get-all-companies/get-all-companies.component';
import {GetOneCompanyComponent} from './components/AdminFunctions/get-one-company/get-one-company.component';
import { AddCouponComponent } from './components/CompanyFunctions/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './components/CompanyFunctions/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/CompanyFunctions/delete-coupon/delete-coupon.component';
import { CompanyAuthGuardService } from './services/company-auth-guard.service';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { ProductListComponent } from './components/CustomerFunctions/product-list/product-list.component';
import { CartComponent } from './components/CustomerFunctions/cart/cart.component';
import { GetCouponsComponent } from './components/CustomerFunctions/get-coupons/get-coupons.component';
import { ViewAllCouponsComponent } from './components/CompanyFunctions/view-all-coupons/view-all-coupons.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddProductComponent } from './components/CompanyFunctions/add-product/add-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "contactus", component: ContactusComponent },
  
  
  


  {
    path: "customer", component: CustomerAreaComponent, canActivate: [CustomerAuthGuardService], children: [
      { path: '', redirectTo: "viewCustomerCoupons", pathMatch: 'full' },
      { path: '**', redirectTo: "viewCustomerCoupons", pathMatch: 'full' },
      { path: 'products', component:ProductListComponent },
      {path:'cart',component:CartComponent},
      {path:'coupons',component:GetCouponsComponent},

    ]
  },
  {
    path: "admin", component: AdminAreaComponent, canActivate: [AdminAuthGuardService], children: [
     // { path: '', redirectTo: "viewAllCompanies", pathMatch: 'full' },
      { path: "createCustomer", component: AddCustomerComponent },
      { path: "deleteCustomer", component: DeleteCustomerComponent },
      { path: "viewAllCustomers", component: GetAllCustomersComponent },
      { path: "viewCustomer", component: GetOneCustomerComponent },
      { path: "updateCustomer", component: UpdateCustomerComponent },
      { path: "addCompany", component: AddCompanyComponent },
      { path: "deleteCompany", component: DeleteCompanyComponent },
      { path: "updateCompany", component: UpdateCompanyComponent },
      { path: "getAllCompanies", component: GetAllCompaniesComponent },
      { path: "getOneCompany", component: GetOneCompanyComponent },
     // { path: '**', redirectTo: "viewAllCompanies", pathMatch: 'full' }
    ]
  },
  {
    path: "company", component: CompanyAreaComponent, canActivate: [CompanyAuthGuardService], children: [
     // { path: '', redirectTo: "viewAllCoupons", pathMatch: 'full' },
      { path: "createCoupon", component: AddCouponComponent },
      { path: "updateCoupon", component: UpdateCouponComponent },
      { path: "deleteCoupon", component: DeleteCouponComponent },
      { path: "viewAllCoupons", component: ViewAllCouponsComponent },
      { path: "addProduct", component: AddProductComponent },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
