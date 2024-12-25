import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneUiComponentsHomeComponent } from './one-ui-components-home.component';
import { OneDashboardComponent } from './MyComponents/one-dashboard/one-dashboard.component';
import { UserViewProfileComponent } from './MyComponents/user-view-profile/user-view-profile.component';
import { UserCreateUsersComponent } from './MyComponents/user-create-users/user-create-users.component';
import { UserResetpasswordComponent } from './MyComponents/user-resetpassword/user-resetpassword.component';
import { AuthGaurdGuard } from './MyApiServices/auth-gaurd.guard';

const routes: Routes = [
  {
    path:'oneadmin',component:OneUiComponentsHomeComponent, canActivate: [AuthGaurdGuard],
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path:'dashboard', component:OneDashboardComponent},
      { path:'user-add', component:UserCreateUsersComponent},
      { path:'user-reset-password', component:UserResetpasswordComponent},
      { path:'user-view-profile', component:UserViewProfileComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneUiRoutingModule { }
