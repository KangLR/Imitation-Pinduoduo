import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
