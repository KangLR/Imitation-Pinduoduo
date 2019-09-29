import { Directive, HostBinding } from '@angular/core';

//属性型指令，加个[]把它变成属性
@Directive({
    selector: '[appGridItem]',
})

//css grid网格布局
//该指令更改元素的样式

export class GridItemDirective { 
    // constructor(private elr:ElementRef,private rd2:Renderer2)
    // {
    // }

    //@HostBinding 绑定指令的宿主的属性或者样式
    //@HostListener 绑定宿主的事件
    @HostBinding('style.display')display='grid';
    @HostBinding('style.grid-template-areas')template=`'image' 'title'`;
    @HostBinding('style.place-items')align='center';
    @HostBinding('style.width')width='4rem';

    // ngOnInit(): void {
    //     this.rd2.setStyle(this.elr.nativeElement,'display','grid');
    //     this.rd2.setStyle(this.elr.nativeElement,'grid-template-areas',`'image' 'title'`);
    //     this.rd2.setStyle(this.elr.nativeElement,'place-items','center');
    //     this.rd2.setStyle(this.elr.nativeElement,'width','4rem');
    // }
}
