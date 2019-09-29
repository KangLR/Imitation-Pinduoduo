import { NgModule } from '@angular/core';
import { RecommendComponent } from './recommend.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [RecommendComponent]
})
export class RecommendModule { }
