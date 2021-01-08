import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveOrderComponent } from './active-order/active-order.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ViewCommentComponent } from './view-comment/view-comment.component';
import { ViewCommentDetailComponent } from './view-comment/view-comment-detail/view-comment-detail.component';
import { ActiveOrderDetailComponent } from './active-order/active-order-detail/active-order-detail.component';
import { TodayReportComponent } from './today-report/today-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveOrderComponent,
    HomeComponent,
    ViewCommentComponent,
    ViewCommentDetailComponent,
    ActiveOrderDetailComponent,
    TodayReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
