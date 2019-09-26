import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

//属性接口
//ts中接口的作用就是进行类型检查
//interface可以充当类型命名，比如string
//可选属性、只读属性
//函数类型、索引类型、类的类型
// export interface TopMenu
// {
//   title:string;
//   readonly link?:string;//readonly可选的 ?只读的
// }

export interface TopMenu{
  title:string;
  link?:string;
}

//索引类型
// interface SuoYin{
//   [key:string]:string
// }

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

  //让menus由外部定义,把数据都移到外部去
  @Input() menus:TopMenu[]=[];

  //EventEmiter()是事件发射器，把你想通知父组件的事件发射出去
  //它在@angular/core里面
  //tabSelected已经被当成了这个组件的事件
  @Output() tabSelected=new EventEmitter();

  selectedIndex=-1;

  @Input() backgroundColor='pink';

  @Input() titleActiveColor='yellow';

  @Input() titleColor='blue';

  @Input() indicatorColor='brown';

  handleSelection(i:number){
    this.selectedIndex=i;
    this.tabSelected.emit(this.menus[this.selectedIndex]);//携带的数据是当前选中的元素
  }




  // suoyin:SuoYin={
  //   a:'1',
  //   b:'2'
  // }
  // test(){
  //   console.log(this.suoyin['a']/this.suoyin.a);
  // }

}
