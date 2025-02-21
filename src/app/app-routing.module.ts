import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneLoginComponent } from './one-login/one-login.component';
import { OneDashboardComponent } from './one-dashboard/one-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/one-login', pathMatch: 'full' },
  { path:'one-login', component:OneLoginComponent},
  { path:'one-control-dashboard', component:OneDashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
