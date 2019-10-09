import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecommendContainerComponent } from './components';
import { RecommendRoutingModule } from './recommend-routing';

@NgModule({
  imports: [
    SharedModule,
    RecommendRoutingModule
  ],
  declarations: [RecommendContainerComponent]
})
export class RecommendModule { }
