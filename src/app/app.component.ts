import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from './shared/components';

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

  channels:Channel[]=[
    {
      id: 1,
      title: '限时秒杀',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-11-13/298376dd8176f90df743de9f08a756eb.png',
      link: 'hot'
    },
    {
      id: 2,
      title: '断码清仓',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-12-07/678088ee2500f08a193ea8619bc0ae76.png',
      link: 'men'
    },
    {
      id: 3,
      title: '品牌馆',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2019-03-14/a01571d7bde632029c76ad9a298570ec.png',
      link: 'sports'
    },
    {
      id: 4,
      title: '多多果园',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-12-03/d21a7598e29ce189a9a57bb234ee4fad.png',
      link: 'department'
    },
    {
      id: 5,
      title: '9块9特卖',
      icon:
        'http://t01img.yangkeduo.com/images/2018-05-16/d86ceaeaa0bccaeb3b3dee76f64f0192.png',
      link: 'food'
    },
    {
      id: 6,
      title: '助力享免单',
      icon:
        'http://t05img.yangkeduo.com/images/2018-05-16/bf18833fa4c298a040fe01f279f6f6ec.png',
      link: 'textile'
    },
    {
      id: 7,
      title: '天天领现金',
      icon:
        'http://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png',
      link: 'mobile'
    },
    {
      id: 8,
      title: '1分抽大奖',
      icon:
        'http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png',
      link: 'appliance'
    },
    {
      id: 9,
      title: '充值中心',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-12-02/68aefda33f6afac045997edd25a3844e.png',
      link: 'shoes'
    },
    {
      id: 10,
      title: '每日好店',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2019-01-20/d36b7af30da354cb2c8ad4ea7bd819cd.png',
      link: 'computers'
    },
    {
      id: 11,
      title: '现金签到',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-08-01/f13e2dff54d604518a1db4facd89d300.png',
      link: 'fruits'
    },
    {
      id: 12,
      title: '金猪赚大钱',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png',
      link: 'cars'
    },
    {
      id: 13,
      title: '电器城',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-11-26/ee327a5ee7fb7ff76a98cf71be967a20.png',
      link: 'underwears'
    },
    {
      id: 14,
      title: '爱逛街',
      icon:
        'http://t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png',
      link: 'home'
    },
    {
      id: 15,
      title: '砍价免费拿',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-11-14/4ad66f8d7d28d6237a9f25b9a6d19f3e.png',
      link: 'baby'
    },
    {
      id: 16,
      title: '帮帮免费团',
      icon:
        'http://t11img.yangkeduo.com/images/2018-04-28/5cfc9925dac860135143921e0f687a7d.png',
      link: 'furnitures'
    }
  ];

}
