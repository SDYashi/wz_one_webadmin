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
import { UserUpdateWorkLocationComponent } from './MyComponents/user-update-work-location/user-update-work-location.component';
import { UserUpdateSecretKeyforAppComponent } from './MyComponents/user-update-secret-keyfor-app/user-update-secret-keyfor-app.component';
import { MessageChatsComponent } from './MyComponents/message-chats/message-chats.component';
import { MessageMessageComponent } from './MyComponents/message-message/message-message.component';
import { MessageUserInputComponent } from './MyComponents/message-user-input/message-user-input.component';
import { UserExistingUsersListComponent } from './MyComponents/user-existing-users-list/user-existing-users-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthOneInterceptorInterceptor } from './MyInterceptor/auth-one-interceptor.interceptor';
import { AlertModelsComponent } from './MySharedModels/alert-models/alert-models.component';
import { ConfirmationModelsComponent } from './MySharedModels/confirmation-models/confirmation-models.component';
import { UserInputModelsComponent } from './MySharedModels/user-input-models/user-input-models.component';
import { UserAddAdminUserInforComponent } from './MyComponents/user-add-admin-user-infor/user-add-admin-user-infor.component';
import { IntegratedAddNewButtonsComponent } from './MyComponents/integrated-add-new-buttons/integrated-add-new-buttons.component';
import { IntegrationBatchDashboardComponent } from './MyComponents/integration-batch-dashboard/integration-batch-dashboard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationModlesComponent } from './MyComponents/MyPopupModels/confirmation-modles/confirmation-modles.component';


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
    UserUpdateWorkLocationComponent,
    UserUpdateSecretKeyforAppComponent,
    MessageChatsComponent,
    MessageMessageComponent,
    MessageUserInputComponent,
    UserExistingUsersListComponent,
    AlertModelsComponent,
    ConfirmationModelsComponent,
    UserInputModelsComponent,
    UserAddAdminUserInforComponent,
    IntegratedAddNewButtonsComponent,
    IntegrationBatchDashboardComponent,
    ConfirmationModlesComponent,
  ],
  imports: [
    CommonModule,
    OneUiRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
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
