import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneUiComponentsHomeComponent } from './one-ui-components-home.component';
import { OneDashboardComponent } from './MyComponents/one-dashboard/one-dashboard.component';
import { UserViewProfileComponent } from './MyComponents/user-view-profile/user-view-profile.component';
import { UserCreateUsersComponent } from './MyComponents/user-create-users/user-create-users.component';
import { UserResetpasswordComponent } from './MyComponents/user-resetpassword/user-resetpassword.component';
import { AuthGaurdGuard } from './MyApiServices/auth-gaurd.guard';
import { UserUpdateWorkLocationComponent } from './MyComponents/user-update-work-location/user-update-work-location.component';
import { UserAddAdminUserInforComponent } from './MyComponents/user-add-admin-user-infor/user-add-admin-user-infor.component';
import { IntegratedAddNewAppComponent } from './MyComponents/integrated-add-new-app/integrated-add-new-app.component';
import { IntegratedAddNewNotifyStatusComponent } from './MyComponents/integrated-add-new-notify-status/integrated-add-new-notify-status.component';
import { IntegratedAddNewButtonsComponent } from './MyComponents/integrated-add-new-buttons/integrated-add-new-buttons.component';
import { IntegrationBatchCreateAndroidUsersComponent } from './MyComponents/integration-batch-create-android-users/integration-batch-create-android-users.component';
import { IntegrationBatchFetchUsersfromPowerbiComponent } from './MyComponents/integration-batch-fetch-usersfrom-powerbi/integration-batch-fetch-usersfrom-powerbi.component';
import { UserUpdateSecretKeyforAppComponent } from './MyComponents/user-update-secret-keyfor-app/user-update-secret-keyfor-app.component';
import { MessageChatsComponent } from './MyComponents/message-chats/message-chats.component';
import { IntegrationBatchDashboardComponent } from './MyComponents/integration-batch-dashboard/integration-batch-dashboard.component';
import { UserExistingUsersListComponent } from './MyComponents/user-existing-users-list/user-existing-users-list.component';

const routes: Routes = [
  {
    path:'oneadmin',
    component:OneUiComponentsHomeComponent, 
    canActivate: [AuthGaurdGuard],
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path:'dashboard', component:OneDashboardComponent},
      { path:'user-create-integration-users', component:UserCreateUsersComponent},
      { path:'user-view-profile', component:UserViewProfileComponent},
      { path:'user-view-list-users', component:UserExistingUsersListComponent},
      { path:'user-change-work-location', component:UserUpdateWorkLocationComponent},
      { path:'user-change-password', component:UserResetpasswordComponent},
      { path:'user-add-users-for-alerts', component:UserAddAdminUserInforComponent},
      { path:'integrated-add-new-app', component:IntegratedAddNewAppComponent},
      { path:'integrated-add-new-notify-status', component:IntegratedAddNewNotifyStatusComponent},
      { path:'integrated-add-new-app-buttons', component:IntegratedAddNewButtonsComponent},
      { path:'db-batch-console-create-user', component:IntegrationBatchCreateAndroidUsersComponent},
      { path:'batch-control-management',component:IntegrationBatchDashboardComponent},
      { path:'db-batch-console-fetch-users-frompowerbi', component:IntegrationBatchFetchUsersfromPowerbiComponent},
      { path:'db-batch-console-create-secretkey', component:UserUpdateSecretKeyforAppComponent},
      { path:'message-chatbot', component:MessageChatsComponent},
      { path:'message-input', component:MessageChatsComponent},
      { path:'message-msg-list', component:MessageChatsComponent},


    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneUiRoutingModule { }
