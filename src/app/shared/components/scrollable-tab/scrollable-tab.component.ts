import { Component, Input,EventEmitter, Output} from '@angular/core';

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
export class ScrollableTabComponent  {

  constructor() {
    console.log('ScrollableTab组件构造调用')
   }

   //ngDoCheck和ngOnChanges不应该在同一个组件当中
   //OnChange只监听自己组件本身的变化，在组件的@Input属性发生变化时调用，是索引对象，key:属性名 value:SimpleChanges对象
   //DoCheck是对整个大的框架到达该组件做的检测
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ScrollableTab组件输入属性改变，可以由多次',changes)//都是字典对象
  // }
  // ngOnInit() {
  //   console.log('ScrollableTab组件初始化')
  // }
  // ngAfterContentInit(): void {
  //   console.log('ScrollableTab组件内容初始化')
  // }

  // //脏值检测两次
  // ngAfterContentChecked(): void {
  //   console.log('ScrollableTab组件内容脏值检测')
  // }

  // //视图：组件+它的子组件都初始化完成
  // //该组件包含它自己和content
  // ngAfterViewInit(): void {
  //   console.log('ScrollableTab组件视图初始化完成')  
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ScrollableTab组件视图脏值检测')   
  // }
  
  // //组件销毁，可以在父组件实现
  // //比如当背景色不是black的时候销毁
  // //一般是做些清理工作，比如设置了setTimeInterval等，避免内存泄漏
  // //一般发生在父组件*ngIf或路由变化时销毁组件
  // ngOnDestroy(): void {
  //   console.log('ScrollableTab组件销毁')        
  // }

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
