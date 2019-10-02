import { Component } from '@angular/core';
import { Channel,  ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent  {

  //ActivatedRoute 激活的路由
  //为每个路由组件提供一个服务，它包含路由的信息
  //如container中定义的路由参数topMenu,link
  //this.router.navigate(['home',topMenu.link]);

  constructor(private route:ActivatedRoute,private service:HomeService) {
    this.imageSliders=service.getBanners();
    this.channels=service.getChannels();
   }

  //根据topMenu.link的值使用ngIf判断显示内容
  selectedTabLink;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('路径参数: ', params);
      this.selectedTabLink = params.get('tabLink');
    });
    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });

    //管道
    this.date=this.minusDays(new Date(),6);
  }

  //管道
  date:Date;
  minusDays(date:Date,days:number){
    const result= new Date(date);
      result.setDate(result.getDate()-days);
      return result;
    }

  

  //轮播图图片
  imageSliders:ImageSlider[]=[];

  channels:Channel[]=[];

  
}
