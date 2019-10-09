import { Component, OnInit, Inject } from '@angular/core';
import { TopMenu} from 'src/app/shared/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService, token } from '../services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  //baseUrl=token
  constructor(private router:Router,private route:ActivatedRoute, private service:HomeService,@Inject(token) private baseUrl:string) { 
    this.service.getTabs().subscribe(tabs=>{this.topMenus=tabs});
    console.log(baseUrl);
  }

  ngOnInit() {
    //底下一堆子路由
    this.selectedTabLink$=this.route.firstChild.paramMap.pipe(
      filter(params=>params.has('tabLink')),
      map(params=>params.get('tabLink'))
    )
  }

  topMenus:TopMenu[]=[];

  //路由导航
  //router路由器，管理从一个组件到另一个组件的导航
  handleTabSelected(topMenu:TopMenu){
    this.router.navigate(['home',topMenu.link]);
  }
  

  //点击然后整个背景变色
  scrollableTabBgColor='black';

  // handleTabSelected(topMenu:TopMenu){
  //   //const 类似于 let 来定义变量 ,但一经赋值就不能改变
  //   const colors=['red','black','white'];
  //   const idx=Math.floor(Math.random()*3);
  //   this.scrollableTabBgColor=colors[idx];

  //   console.log(topMenu);//topMenu的类型是个对象（object）
  // }

  selectedTabLink$:Observable<string>
  

}
