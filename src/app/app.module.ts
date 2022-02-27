import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './size/navbar/navbar.component';
import { AboutComponent } from './size/about/about.component';
import { FooterComponent } from './size/footer/footer.component';
import { LoginComponent } from './size/login/login.component';
import { ProflieComponent } from './size/proflie/proflie.component';
import { RegisterComponent } from './size/register/register.component';
import { SlideComponent } from './size/slide/slide.component';
import { SiteComponent } from './site/site.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';
import { DashboardNavbarComponent } from './admin/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidebarComponent } from './admin/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardFooterComponent } from './admin/dashboard-footer/dashboard-footer.component';
import { ProductsComponent } from './site/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    ProflieComponent,
    RegisterComponent,
    SlideComponent,
    SiteComponent,
    AdminComponent,
    UsersComponent,
    ProductComponent,
    DashboardComponent,
    StatusComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    DashboardFooterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
