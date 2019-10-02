import { Component, OnInit, Inject } from '@angular/core';
import { TopMenu} from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService, token } from '../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  //baseUrl=token
  constructor(private router:Router,private service:HomeService,@Inject(token) private baseUrl:string) { 
    this.topMenus=this.service.getTabs();
    console.log(baseUrl);
  }

  ngOnInit() {
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
  

}
