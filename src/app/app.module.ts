import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule, ParamInterceptor, NotificationInterceptor } from './home';
import {HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    {
      //用于多个对象的令牌
      provide:HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi:true
    },
    {
      //用于多个对象的令牌
      provide:HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
