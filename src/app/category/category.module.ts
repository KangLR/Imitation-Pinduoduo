import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
