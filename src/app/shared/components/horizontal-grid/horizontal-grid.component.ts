import { Component, OnInit, Input } from '@angular/core';

export interface Channel{
  id:number;
  icon:string;
  title:string;
  link:string;//点击上去
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  @Input() cols=8;//一行多少列
  @Input() displayCols=5;
  sliderMargin='0';

  
  public get scrollable() : boolean {
    return this.cols>this.displayCols;
  }
  
  public get templateRows() : string {
    return `minmax(auto,max-content)`;
  }
  
  

  //return `repeat(${this.cols},calc((100vw-${this.displayCols*0.4}rem)/${this.displayCols}))`;
  //calc()函数有bug，好像是vm的浏览器兼容不是很好
  public get templateColumns() : string {
    return `repeat(${this.cols},67px)`;
  }
  
  handleScroll(ev){
    this.sliderMargin=`0 ${100 * ev.target.scrollLeft/ev.target.scrollWidth}%`;
  }
  

  constructor() { }

  ngOnInit() {
  }

  
  
}



//自定义装饰器，装饰器既可以应用于属性也可以应用于函数
  //装饰器就是返回函数的函数
  //import { Emoji, Confirmable } from '../../decorators';
  //@Emoji() result='Hello';
  //@Confirmable('您确认要执行吗？') handleClick(){console.log('点击已执行')}