import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AddCustomerComponent } from './components/AdminFunctions/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/AdminFunctions/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/AdminFunctions/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/AdminFunctions/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from './components/AdminFunctions/get-one-customer/get-one-customer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent} from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { CustomerAreaComponent } from './components/customer-area/customer-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './services/http-interceptor.service';
import { ListFilterCompanyPipe } from './pipes/list-filter-company.pipe';
import { ListFilterCustomerPipe } from './pipes/list-filter-customer.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './services/products.service';
import { AddCompanyComponent } from './components/AdminFunctions/add-company/add-company.component';
import { DeleteCompanyComponent } from './components/AdminFunctions/delete-company/delete-company.component';
import { UpdateCompanyComponent } from './components/AdminFunctions/update-company/update-company.component';
import { GetAllCompaniesComponent} from './components/AdminFunctions/get-all-companies/get-all-companies.component';
import { GetOneCompanyComponent} from './components/AdminFunctions/get-one-company/get-one-company.component';
import { AddCouponComponent } from './components/CompanyFunctions/add-coupon/add-coupon.component';
import { DeleteCouponComponent } from './components/CompanyFunctions/delete-coupon/delete-coupon.component';
import { UpdateCouponComponent } from './components/CompanyFunctions/update-coupon/update-coupon.component';
import { CompanyAreaComponent } from './components/company-area/company-area.component';
import { ProductListComponent} from './components/CustomerFunctions/product-list/product-list.component';
import { CartComponent } from './components/CustomerFunctions/cart/cart.component';
import { GetCouponsComponent } from './components/CustomerFunctions/get-coupons/get-coupons.component';
import { ViewAllCouponsComponent } from './components/CompanyFunctions/view-all-coupons/view-all-coupons.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddProductComponent } from './components/CompanyFunctions/add-product/add-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    GetAllCustomersComponent,
    GetOneCustomerComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    AdminAreaComponent,
    CustomerAreaComponent,
    ListFilterCompanyPipe,
    ListFilterCustomerPipe,
    AddCompanyComponent,
    DeleteCompanyComponent,
    UpdateCompanyComponent,
   GetAllCompaniesComponent,
    GetOneCompanyComponent,
    AddCouponComponent,
    DeleteCouponComponent,
    UpdateCouponComponent,
    CompanyAreaComponent,
    ProductListComponent,
    CartComponent,
    GetCouponsComponent,
    ViewAllCouponsComponent,
    AboutusComponent,
    AddProductComponent,
    RegistrationComponent,
    ContactusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    ListFilterCompanyPipe,
    ListFilterCustomerPipe,
    ProductsService
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
