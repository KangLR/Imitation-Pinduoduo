import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //构造函数永远第一个被调用
  constructor(){
    console.log('AppComponent构造调用')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent输入属性改变')
  }
  //组件初始化完成，在这里可以安全的使用组件的属性和方法
  ngOnInit(){
    console.log('AppComponent组件初始化')
  }
  

}
