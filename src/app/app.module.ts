import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneLoginComponent } from './one-login/one-login.component';
import { OneUiModule } from './one-ui/one-ui.module';
import { FormsModule } from '@angular/forms';
import { UserAddAdminUserInforComponent } from './src/app/one-ui/MyComponents/user-add-admin-user-infor/user-add-admin-user-infor.component';
import { IntegratedAddNewButtonsComponent } from './src/app/one-ui/MyComponents/integrated-add-new-buttons/integrated-add-new-buttons.component';
import { IntegratedBatchDashboardComponent } from './src/app/one-ui/MyComponents/integrated-batch-dashboard/integrated-batch-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    OneLoginComponent,
    UserAddAdminUserInforComponent,
    IntegratedAddNewButtonsComponent,
    IntegratedBatchDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneUiModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
