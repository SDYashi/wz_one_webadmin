import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneLoginComponent } from './one-login/one-login.component';
import { OneUiModule } from './one-ui/one-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    OneLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
