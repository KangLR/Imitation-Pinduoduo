import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { takeWhile, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  countDown$:Observable<string>;

  //到期时间-起始时间，形成一个时间差
  @Input() startDate=new Date();
  //到期时间
  @Input() futureDate:Date;
  private _MS_PER_SECOND=1000;

  //得到他俩的时间差
  private diffInsec=(start:Date,future:Date):number=>{
    const diff=future.getTime()-start.getTime();//得到的是毫秒
    return Math.floor(diff/this._MS_PER_SECOND);
  }

  constructor() { }

  //用差值减流逝的时间
  ngOnInit() {
    
    this.countDown$=this.getCountDownObservable(this.startDate,this.futureDate);
  }

  //map可以多次改变流的形态
  private getCountDownObservable(startDate:Date,futureDate:Date){
    //interval就是个计时器，以毫秒为单位，定时的observable，在流里产生数字，每次加1
    return interval(1000).pipe(
      map(elapse=>this.diffInsec(startDate,futureDate)-elapse),
      //takeWhile 当表达式为真的时候订阅流，为假时就complete流
      takeWhile(gap=> gap>=0),
      //tap看当前的值
      tap(val=>console.log(val)),
      map(
        //这是个对象
        sec=>({
          day:Math.floor(sec/3600/24),
          hour:Math.floor((sec/3600)%24),
          minute:Math.floor((sec/60)%60),
          second:Math.floor(sec%60)
          })),
        tap(val=>console.log(val)),
      map(
        date=> `${date.hour}:${date.minute}:${date.second}`
      )
    )
  }



}
