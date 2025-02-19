import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneUiComponentsHomeComponent } from './one-ui-components-home.component';
import { OneDashboardComponent } from './MyComponents/one-dashboard/one-dashboard.component';
import { UserViewProfileComponent } from './MyComponents/user-view-profile/user-view-profile.component';
import { UserCreateUsersComponent } from './MyComponents/user-create-users/user-create-users.component';
import { UserResetpasswordComponent } from './MyComponents/user-resetpassword/user-resetpassword.component';
import { AuthGaurdGuard } from './MyApiServices/auth-gaurd.guard';
import { UserUpdateWorkLocationComponent } from './MyComponents/user-update-work-location/user-update-work-location.component';
import { IntegratedAddNewAppComponent } from './MyComponents/integrated-add-new-app/integrated-add-new-app.component';
import { IntegratedAddNewNotifyStatusComponent } from './MyComponents/integrated-add-new-notify-status/integrated-add-new-notify-status.component';
import { IntegrationBatchCreateAndroidUsersComponent } from './MyComponents/integration-batch-create-android-users/integration-batch-create-android-users.component';
import { IntegrationBatchFetchUsersfromPowerbiComponent } from './MyComponents/integration-batch-fetch-usersfrom-powerbi/integration-batch-fetch-usersfrom-powerbi.component';
import { CommunincationSendEmailAdndroidUsersComponent } from './MyComponents/communincation-send-email-adndroid-users/communincation-send-email-adndroid-users.component';
import { CommunincationSendEmailAdminUsersComponent } from './MyComponents/communincation-send-email-admin-users/communincation-send-email-admin-users.component';
import { CommunincationSendSMSAdndroidUsersComponent } from './MyComponents/communincation-send-smsadndroid-users/communincation-send-smsadndroid-users.component';
import { CommunincationSendSMSAdminUsersComponent } from './MyComponents/communincation-send-smsadmin-users/communincation-send-smsadmin-users.component';
import { UserUpdateSecretKeyforAppComponent } from './MyComponents/user-update-secret-keyfor-app/user-update-secret-keyfor-app.component';
import { MessageChatsComponent } from './MyComponents/message-chats/message-chats.component';
import { UserComplaintsDashboardComponent } from './MyComponents/user-complaints-dashboard/user-complaints-dashboard.component';

const routes: Routes = [
  {
    path:'oneadmin',
    component:OneUiComponentsHomeComponent, 
    // canActivate: [AuthGaurdGuard],
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path:'dashboard', component:OneDashboardComponent},
      { path:'user-create-integration-users', component:UserCreateUsersComponent},
      { path:'user-view-profile', component:UserViewProfileComponent},
      { path:'user-change-work-location', component:UserUpdateWorkLocationComponent},
      { path:'user-change-password', component:UserResetpasswordComponent},
      { path:'integrated-add-new-app', component:IntegratedAddNewAppComponent},
      { path:'integrated-add-new-notify-status', component:IntegratedAddNewNotifyStatusComponent},
      { path:'db-batch-console-create-user', component:IntegrationBatchCreateAndroidUsersComponent},
      { path:'db-batch-console-fetch-users-frompowerbi', component:IntegrationBatchFetchUsersfromPowerbiComponent},
      { path:'db-batch-console-create-secretkey', component:UserUpdateSecretKeyforAppComponent},
      { path:"communincation-send-email-adndroid-users",component:CommunincationSendEmailAdndroidUsersComponent},
      { path:"communincation-send-email-admin-users",component:CommunincationSendEmailAdminUsersComponent},
      { path:"communincation-send-smsadndroid-users",component:CommunincationSendSMSAdndroidUsersComponent},
      { path:"communincation-send-smsadmin-users",component:CommunincationSendSMSAdminUsersComponent},
      { path:'message-chatbot', component:MessageChatsComponent},
      { path:'message-input', component:MessageChatsComponent},
      { path:'message-msg-list', component:MessageChatsComponent},
      { path:'user-complaints-dashboard', component:UserComplaintsDashboardComponent},
      { path:'user-complaints-form-entry', component:UserComplaintsDashboardComponent},
      { path:'user-complaints-view', component:UserComplaintsDashboardComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneUiRoutingModule { }
