import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneUiComponentsHomeComponent } from './one-ui-components-home.component';
import { OneDashboardComponent } from './MyComponents/one-dashboard/one-dashboard.component';
import { UserAddoneAdminComponent } from './MyComponents/user-addone-admin/user-addone-admin.component';
import { UserViewProfileComponent } from './MyComponents/user-view-profile/user-view-profile.component';

const routes: Routes = [
  {
    path:'oneadmin',component:OneUiComponentsHomeComponent,children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path:'dashboard', component:OneDashboardComponent},
      { path:'user-add', component:UserAddoneAdminComponent},
      { path:'user-reset-password', component:UserAddoneAdminComponent},
      { path:'user-view-profile', component:UserViewProfileComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneUiRoutingModule { }
