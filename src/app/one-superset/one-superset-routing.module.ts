import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommmercialComponent } from './commmercial/commmercial.component';
import { StoreComponent } from './store/store.component';
import { SupersetLoaderHomeComponent } from './superset-loader-home.component';

const routes: Routes = [
  // {
  //       path:'superset',
  //       component:SupersetLoaderHomeComponent, 
  //       // canActivate: [AuthGaurdGuard],
  //       children: [
  //         { path: '', redirectTo: '/commmercial', pathMatch: 'full' },
  //         { path:'commmercial', component:CommmercialComponent},
  //         { path:'store', component:StoreComponent},
  //       ]
      
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneSupersetRoutingModule { }
