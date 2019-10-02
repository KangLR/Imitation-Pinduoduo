import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  

  //zone是浏览器的js运行时
  //可以在浏览器中划分n个区域，每个区域自己运行自己的程序
  //如果把值运行在angular的zone之外，就检测不到值的改变

  constructor(private ngZone:NgZone) { 
    this._title='hi';
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    // this.ngZone.runOutsideAngular(()=>{this._title='改变'});
    //这样不会陷入无限循环

    //但是要异步才行
    //这样同步检查时title是不变的
    this.ngZone.runOutsideAngular(()=>{setInterval(()=>{this._title='改变';},1000)});
    
  }


  _title;
  
  public get title() : string {
    console.log('脏值检测');
    return this._title;
  }

  //angular用于脏值检测时做的步骤
//   function checkAndUpdateView(view) {
//     if (view.state & 1 /* BeforeFirstCheck */) {
//         view.state &= ~1 /* BeforeFirstCheck */;
//         view.state |= 2 /* FirstCheck */;
//     }
//     else {
//         view.state &= ~2 /* FirstCheck */;
//     }
//     shiftInitState(view, 0 /* InitState_BeforeInit */, 256 /* InitState_CallingOnInit */);
//     markProjectedViewsForCheck(view);
//     Services.updateDirectives(view, 0 /* CheckAndUpdate */);
//     execEmbeddedViewsAction(view, ViewAction.CheckAndUpdate);
//     execQueriesAction(view, 67108864 /* TypeContentQuery */, 536870912 /* DynamicQuery */, 0 /* CheckAndUpdate */);
//     /** @type {?} */
//     let callInit = shiftInitState(view, 256 /* InitState_CallingOnInit */, 512 /* InitState_CallingAfterContentInit */);
//     callLifecycleHooksChildrenFirst(view, 2097152 /* AfterContentChecked */ | (callInit ? 1048576 /* AfterContentInit */ : 0));
//     Services.updateRenderer(view, 0 /* CheckAndUpdate */);
//     execComponentViewsAction(view, ViewAction.CheckAndUpdate);
//     execQueriesAction(view, 134217728 /* TypeViewQuery */, 536870912 /* DynamicQuery */, 0 /* CheckAndUpdate */);
//     callInit = shiftInitState(view, 512 /* InitState_CallingAfterContentInit */, 768 /* InitState_CallingAfterViewInit */);
//     callLifecycleHooksChildrenFirst(view, 8388608 /* AfterViewChecked */ | (callInit ? 4194304 /* AfterViewInit */ : 0));
//     if (view.def.flags & 2 /* OnPush */) {
//         view.state &= ~8 /* ChecksEnabled */;
//     }
//     view.state &= ~(64 /* CheckProjectedViews */ | 32 /* CheckProjectedView */);
//     shiftInitState(view, 768 /* InitState_CallingAfterViewInit */, 1024 /* InitState_AfterInit */);
// }
  
}
