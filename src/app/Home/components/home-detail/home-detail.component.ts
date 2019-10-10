import { Component } from '@angular/core';
import { Channel,  ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Ad, Product } from 'src/app/shared/domain';

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
    this.imageSliders$=this.service.getBanners()//.subscribe(banners=>{this.imageSliders=banners;});
    this.sub2=this.service.getChannels().subscribe(channels=>{this.channels=channels});
   }

  ad$:Observable<Ad[]>
  products$:Observable<Product[]>


  //根据topMenu.link的值使用ngIf判断显示内容
  //变成数据流后可以使用async管道转化,自动订阅
  selectedTabLink$:Observable<String>;

   //轮播图图片
  //  imageSliders:ImageSlider[]=[];
  imageSliders$:Observable<ImageSlider[]>;

   channels:Channel[]=[];
   sub1:Subscription;
   sub2:Subscription;
 

  ngOnInit() {

    this.selectedTabLink$=this.route.paramMap
    .pipe(
      //字典型的流变成了string型的流
      filter(params=>params.has('tabLink')),
      map(params=>params.get('tabLink'))
    );
    this.ad$=this.selectedTabLink$.pipe(
      switchMap(tab=>this.service.getAdByTab(tab)),
      filter(ads=>ads.length>0),
      map(ads=>ads[0])
    );
    this.products$=this.selectedTabLink$.pipe(
      switchMap(tab=>this.service.getProductsByTab(tab))
    );

    // this.route.paramMap
    // .pipe(
    //   filter(params=>params.has('tabLink')),
    //   map(params=>params.get('tabLink'))
    // )//这个操作就是为了得到tabLink
    //   .subscribe(tabLink => {
    //   console.log('路径参数: ', tabLink);
    //   this.selectedTabLink = tabLink;
    // });
    //可以由以下代替



    this.sub1=this.route.queryParamMap.subscribe(params => {
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

    //用async pipe就不用取消订阅，清理它防止内存泄漏
    ngOnDestroy(): void {
      this.sub1.unsubscribe();
      this.sub2.unsubscribe()
    }
}
