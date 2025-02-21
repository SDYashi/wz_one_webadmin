import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneLoginComponent } from './one-login/one-login.component';
import { OneUiModule } from './one-ui/one-ui.module';
import { FormsModule } from '@angular/forms';
import { OneDashboardComponent } from './one-dashboard/one-dashboard.component';
import { OneSupersetModule } from './one-superset/one-superset.module';
import { OneTagsConsVillageModule } from './one-tags-cons-village/one-tags-cons-village.module';
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
    OneSupersetModule,
    OneTagsConsVillageModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
