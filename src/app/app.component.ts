import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TopMenu, ImageSlider } from './shared/components';

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
  topMenus:TopMenu[]=[
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    }
  ];

  //轮播图图片
  imageSliders:ImageSlider[]=[
    {
      imgUrl:
      'http://pic2.sc.chinaz.com/files/pic/pic9/201908/zzpic19770.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'http://pic1.sc.chinaz.com/files/pic/pic9/201909/bpic13700.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:
      'http://pic1.sc.chinaz.com/files/pic/pic9/201909/zzpic20261.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'http://pic1.sc.chinaz.com/files/pic/pic9/201909/bpic13648.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'http://pic.sc.chinaz.com/files/pic/pic9/201909/bpic13571.jpg',
      link: '',
      caption: ''
    }
  ];


  //点击然后整个背景变色
  scrollableTabBgColor='black';

  handleTabSelected(topMenu:TopMenu){
    //const 类似于 let 来定义变量 ,但一经赋值就不能改变
    const colors=['red','black','white'];
    const idx=Math.floor(Math.random()*3);
    this.scrollableTabBgColor=colors[idx];

    console.log(topMenu);//topMenu的类型是个对象（object）
  }

}
