import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';
@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
