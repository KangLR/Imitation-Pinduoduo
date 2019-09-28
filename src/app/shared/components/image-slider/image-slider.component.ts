import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

export interface ImageSlider{
  imgUrl:string;
  link:string;
  caption:string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit,AfterViewInit,OnDestroy {

  
  @Input() sliders:ImageSlider[]=[];
  @Input() sliderHeight='160px';

  //该元素没在nofor/ngif包含之下，所以是静态的
  //由ngFor多个的话用ViewChildren  imgs:QueryList<ElementRef>
  //直接操作DOM不好，使用rd2,防止注入攻击
  @ViewChild('imageSlider',{static:true}) imgSlider:ElementRef;
  @ViewChildren('img') imgs:QueryList<ElementRef>;

  constructor(private rd2:Renderer2) { }

  ngOnInit() {
    console.log('ngOnInit',this.imgSlider);
  }

  @Input() intervalBySeconds=3;

  intervalId;//防止内存泄漏
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  
  ngAfterViewInit(): void {
    this.intervalId=
    setInterval(()=>{this.rd2.setProperty(this.imgSlider.nativeElement,'scrollLeft',(this.getIndex(++this.selectedIndex)*this.imgSlider.nativeElement.scrollWidth)/this.sliders.length)},this.intervalBySeconds*1000)

    // console.log('ngAfterViewInit',this.imgs);
    // this.imgs.forEach(item=>{this.rd2.setStyle(item.nativeElement,'height','100px')})
  
    //scrollLeft为距离最左边多少
    //scrollWidth为整个width多少
    //setInterval()按周期调用函数或窗口，单位是ms
    //clearInterval可以关闭它,由setInterval()返回的ID值可用作clearInterval()方法的参数
 
  }

  getIndex(idx:number):number{
    return idx>=0?idx%this.sliders.length:
    (this.sliders.length-(Math.abs(idx)))%this.sliders.length;
  }
  //target是DOM结点
  selectedIndex=0;
  handleScroll(ev){
    const ratio=ev.target.scrollLeft*this.sliders.length/ev.target.scrollWidth;
    this.selectedIndex=Math.round(ratio);
  }
}
