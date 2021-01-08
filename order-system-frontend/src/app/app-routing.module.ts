import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveOrderDetailComponent } from './active-order/active-order-detail/active-order-detail.component';
import { ActiveOrderComponent } from './active-order/active-order.component';
import { HomeComponent } from './home/home.component';
import { TodayReportComponent } from './today-report/today-report.component';
import { ViewCommentDetailComponent } from './view-comment/view-comment-detail/view-comment-detail.component';
import { ViewCommentComponent } from './view-comment/view-comment.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'active-order', component: ActiveOrderComponent},
  {path: 'active-order-detail/:id', component: ActiveOrderDetailComponent},
  {path: 'view-comment', component: ViewCommentComponent},
  {path: 'view-comment-detail/:id', component: ViewCommentDetailComponent},
  {path: 'today-report', component: TodayReportComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
