import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild('inputRef',{static:true}) inputRef:ElementRef;

  constructor() { }

  ngOnInit() {
    //rx操作符fromEvent，它是要检测某一个html元素的事件
    //所有事件都有一个target属性，引用触发该事件的HTML元素，如target=<input>元素
    //value返回该元素的当前内容
    fromEvent(this.inputRef.nativeElement,'input').subscribe((ev:any)=>console.log(ev.target.value));
  }

  startDate= new Date(2019,6,1);
  futureDate= new Date(2019,6,2);
}
