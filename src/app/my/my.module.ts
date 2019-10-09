import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyRoutingModule } from './my-routing';
import { MyContainerComponent } from './components';

@NgModule({
  imports: [
    SharedModule,
    MyRoutingModule
  ],
  declarations: [MyContainerComponent]
})
export class MyModule { }
