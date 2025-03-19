import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillMapperRoutingModule } from './vill-mapper-routing.module';
import { VillComLoaderComponent } from './vill-com-loader.component';
import { VillMappingComponent } from './vill-mapping/vill-mapping.component';
import { VillEditMappingComponent } from './vill-edit-mapping/vill-edit-mapping.component';
import { VillViewMappingComponent } from './vill-view-mapping/vill-view-mapping.component';
import { VillDashboardComponent } from './vill-dashboard/vill-dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VillComLoaderComponent,
    VillMappingComponent,
    VillEditMappingComponent,
    VillViewMappingComponent,
    VillDashboardComponent
  ],
  imports: [
    CommonModule,
    VillMapperRoutingModule,
    FormsModule,
  ]
})
export class VillMapperModule { }
