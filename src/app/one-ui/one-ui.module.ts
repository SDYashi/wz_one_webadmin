import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneUiRoutingModule } from './one-ui-routing.module';
import { OneUiComponentsHomeComponent } from './one-ui-components-home.component';
import { OneDashboardComponent } from './MyComponents/one-dashboard/one-dashboard.component';
import { UserResetpasswordComponent } from './MyComponents/user-resetpassword/user-resetpassword.component';
import { UserViewProfileComponent } from './MyComponents/user-view-profile/user-view-profile.component';
import { UserCreateUsersComponent } from './MyComponents/user-create-users/user-create-users.component';
import { IntegratedAddNewAppComponent } from './MyComponents/integrated-add-new-app/integrated-add-new-app.component';
import { IntegratedAddNewNotifyStatusComponent } from './MyComponents/integrated-add-new-notify-status/integrated-add-new-notify-status.component';
import { IntegrationBatchCreateAndroidUsersComponent } from './MyComponents/integration-batch-create-android-users/integration-batch-create-android-users.component';
import { IntegrationBatchFetchUsersfromPowerbiComponent } from './MyComponents/integration-batch-fetch-usersfrom-powerbi/integration-batch-fetch-usersfrom-powerbi.component';
import { CommunincationSendEmailAdndroidUsersComponent } from './MyComponents/communincation-send-email-adndroid-users/communincation-send-email-adndroid-users.component';
import { CommunincationSendEmailAdminUsersComponent } from './MyComponents/communincation-send-email-admin-users/communincation-send-email-admin-users.component';
import { UserUpdateWorkLocationComponent } from './MyComponents/user-update-work-location/user-update-work-location.component';
import { UserUpdateSecretKeyforAppComponent } from './MyComponents/user-update-secret-keyfor-app/user-update-secret-keyfor-app.component';
import { MessageChatsComponent } from './MyComponents/message-chats/message-chats.component';
import { MessageMessageComponent } from './MyComponents/message-message/message-message.component';
import { MessageUserInputComponent } from './MyComponents/message-user-input/message-user-input.component';
import { UserExistingUsersListComponent } from './MyComponents/user-existing-users-list/user-existing-users-list.component';
import { UserComplaintsFormComponent } from './MyComponents/user-complaints-form/user-complaints-form.component';
import { UserComplaintsViewComponent } from './MyComponents/user-complaints-view/user-complaints-view.component';
import { UserComplaintsDashboardComponent } from './MyComponents/user-complaints-dashboard/user-complaints-dashboard.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CommunincationSendSMSAdminUsersComponent } from './MyComponents/communincation-send-smsadmin-users/communincation-send-smsadmin-users.component';
import { AuthOneInterceptorInterceptor } from './MyInterceptor/auth-one-interceptor.interceptor';
import { AlertModelsComponent } from './MySharedModels/alert-models/alert-models.component';
import { ConfirmationModelsComponent } from './MySharedModels/confirmation-models/confirmation-models.component';
import { UserInputModelsComponent } from './MySharedModels/user-input-models/user-input-models.component';


@NgModule({
  declarations: [
    OneUiComponentsHomeComponent,
    OneDashboardComponent,
    UserResetpasswordComponent,
    UserViewProfileComponent,
    UserCreateUsersComponent,
    IntegratedAddNewAppComponent,
    IntegratedAddNewNotifyStatusComponent,
    IntegrationBatchCreateAndroidUsersComponent,
    IntegrationBatchFetchUsersfromPowerbiComponent,
    CommunincationSendEmailAdndroidUsersComponent,
    CommunincationSendEmailAdminUsersComponent,
    UserUpdateWorkLocationComponent,
    UserUpdateSecretKeyforAppComponent,
    MessageChatsComponent,
    MessageMessageComponent,
    MessageUserInputComponent,
    UserExistingUsersListComponent,
    UserComplaintsFormComponent,
    UserComplaintsViewComponent,
    UserComplaintsDashboardComponent,
    CommunincationSendSMSAdminUsersComponent,
    AlertModelsComponent,
    ConfirmationModelsComponent,
    UserInputModelsComponent
  ],
  imports: [
    CommonModule,
    OneUiRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthOneInterceptorInterceptor,
      multi: true
    }
  ]
})
export class OneUiModule { }
