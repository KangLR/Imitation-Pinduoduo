import { Directive,ElementRef, Renderer2, Input, OnInit, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})

//grid-area指定项目放在哪一个区域，当前有两个区域image/title
export class GridItemImageDirective implements OnInit{ 
    @Input() appGridItemImage='2rem';
    @Input() fitMode='cover';
    constructor(private elr:ElementRef,private rd2:Renderer2){
    }

    //不能设置过早，不然可能会不起效果
    ngOnInit(): void {
        this.rd2.setStyle(this.elr.nativeElement,'grid-areas','image');
        this.rd2.setStyle(this.elr.nativeElement,'width',this.appGridItemImage);
        this.rd2.setStyle(this.elr.nativeElement,'height',this.appGridItemImage);
        this.rd2.setStyle(this.elr.nativeElement,'object-fit',this.fitMode);
    }

    //宿主事件绑定
    //$event.target就是DOM结点
    @HostListener('click',['$event.target'])
    handleClick(ev){
        console.log(ev);
    }

    //组件的host事件通常写在css中:host伪类
}