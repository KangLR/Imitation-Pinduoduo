import { Component, OnInit } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //自定义装饰器，装饰器既可以应用于属性也可以应用于函数
  //装饰器就是返回函数的函数
  @Emoji() result='Hello';
  @Confirmable('您确认要执行吗？') handleClick(){console.log('点击已执行')}
}
