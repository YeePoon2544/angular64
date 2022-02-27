import { AdminComponent } from './admin/admin.component';
import { StatusComponent } from './status/status.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SiteComponent } from './site/site.component';
import { SlideComponent } from './size/slide/slide.component';
import { ProflieComponent } from './size/proflie/proflie.component';
import { AboutComponent } from './size/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '', component: SiteComponent,
     children: [
  {path: '', component: ProductComponent},
  {path: 'products', component: ProductComponent},
  {path: 'about', component: AboutComponent},
  {path: 'proflie', component: ProflieComponent},
  {path: 'slide', component: SlideComponent}
     ]
  },
{
  path: '',component: AdminComponent,
  children: [
    { path: 'admin', component: DashboardComponent},
    { path: 'users', component: UsersComponent},
    { path: 'status', component: StatusComponent},
    { path: 'product', component: ProductComponent}
  ]
}
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
