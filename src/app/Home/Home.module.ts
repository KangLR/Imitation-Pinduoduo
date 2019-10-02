import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService, token } from './components/services';
@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers:[
    
    //HomeService,
    //写在home.service中编译出来的大小比较小,真正注入了才会编译到js中去
    {
      provide:token,
      useValue:'http://local.dev'
    }
  ]
})
export class HomeModule { }
