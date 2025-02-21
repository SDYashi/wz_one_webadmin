import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneSupersetRoutingModule } from './one-superset-routing.module';
import { CommmercialComponent } from './commmercial/commmercial.component';
import { StoreComponent } from './store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CommmercialComponent,
    StoreComponent,
  ],
  imports: [
    CommonModule,
    OneSupersetRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule ,
  ]
})
export class OneSupersetModule { }
