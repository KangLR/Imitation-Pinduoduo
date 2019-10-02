import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeDetailComponent, ParentComponent } from './components';

const routes: Routes = [
    {
        path:'home',
        component:HomeContainerComponent,
        children:[
            //默认的值
             {
             path:'',
             redirectTo:'hot',
             pathMatch:'full'
             },
             {
             path:':tabLink',//路由参数
                 component:HomeDetailComponent
         }
            
        ]
    },
    {
        path:'change-detection',
        component:ParentComponent,
        pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule{}