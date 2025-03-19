import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillComLoaderComponent } from './vill-com-loader.component';
import { VillDashboardComponent } from './vill-dashboard/vill-dashboard.component';
import { VillMappingComponent } from './vill-mapping/vill-mapping.component';
import { VillEditMappingComponent } from './vill-edit-mapping/vill-edit-mapping.component';
import { VillViewMappingComponent } from './vill-view-mapping/vill-view-mapping.component';

const routes: Routes = [
  {
    path:'vill-tagging',
    component:VillComLoaderComponent, 
    // canActivate: [AuthGaurdGuard],
    children: [
      { path: '', redirectTo: '/vill-dashboard', pathMatch: 'full' },
      { path:'vill-dashboard', component:VillDashboardComponent},
      { path:'vill-mapping', component:VillMappingComponent},
      { path:'vill-edit-mapping', component:VillEditMappingComponent},
      { path:'vill-view-mapping', component:VillViewMappingComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillMapperRoutingModule { }
