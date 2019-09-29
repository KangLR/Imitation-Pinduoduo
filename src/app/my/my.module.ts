import { NgModule } from '@angular/core';
import { MyComponent } from './my.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MyComponent]
})
export class MyModule { }
