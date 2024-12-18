import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneLoginComponent } from './one-login/one-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/one-login', pathMatch: 'full' },
  { path:'one-login', component:OneLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
