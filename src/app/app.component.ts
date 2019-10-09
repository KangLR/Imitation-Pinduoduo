import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TabItem } from './shared/domain';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // //构造函数永远第一个被调用
  // constructor(){
  //   console.log('AppComponent构造调用')
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('AppComponent输入属性改变')
  // }
  // //组件初始化完成，在这里可以安全的使用组件的属性和方法
  // ngOnInit(){
  //   console.log('AppComponent组件初始化')
  // }

  selectedIndex$: Observable<number>;
  handleTabSelect(tab:TabItem){
    this.router.navigate([tab.link]);
  }
  constructor(private router:Router){}
  ngOnInit(): void {
    this.selectedIndex$=this.router.events.pipe(
      //navigationEnd有个Url属性
      filter(ev => ev instanceof NavigationEnd),
      map((ev:NavigationEnd)=>{
        const arr=ev.url.split('/');
        return arr.length>1?arr[1]:'home';//得到的是字符串，再写一个方法得到index
      }),
      map(path=>this.getSelectedIndex(path))
    )
  }

  getSelectedIndex(tab:string){
    return tab === 'recommend'
      ? 1
      : tab === 'category'
      ? 2
      : tab === 'chat'
      ? 3
      : tab === 'my'
      ? 4
      : 0;
  }
  

}
