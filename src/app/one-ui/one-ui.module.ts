import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneUiRoutingModule } from './one-ui-routing.module';
import { OneUiComponentsHomeComponent } from './one-ui-components-home.component';
import { OneDashboardComponent } from './MyComponents/one-dashboard/one-dashboard.component';
import { UserAddoneAdminComponent } from './MyComponents/user-addone-admin/user-addone-admin.component';
import { UserResetpasswordComponent } from './MyComponents/user-resetpassword/user-resetpassword.component';
import { UserViewProfileComponent } from './MyComponents/user-view-profile/user-view-profile.component';


@NgModule({
  declarations: [
    OneUiComponentsHomeComponent,
    OneDashboardComponent,
    UserAddoneAdminComponent,
    UserResetpasswordComponent,
    UserViewProfileComponent
  ],
  imports: [
    CommonModule,
    OneUiRoutingModule
  ]
})
export class OneUiModule { }
