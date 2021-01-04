import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveOrderComponent } from './active-order/active-order.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'active-order', component: ActiveOrderComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
