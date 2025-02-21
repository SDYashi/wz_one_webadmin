import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneLoginComponent } from './one-login/one-login.component';
import { OneUiModule } from './one-ui/one-ui.module';
import { FormsModule } from '@angular/forms';
import { OneDashboardComponent } from './one-dashboard/one-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    OneLoginComponent,
    OneDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneUiModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
