import { Directive,  HostBinding, Input } from '@angular/core';

//属性型指令，加个[]把它变成属性
@Directive({
    selector: '[appGridItemTitle]',
})


export class GridItemTitleDirective { 

    @HostBinding('style.grid-area') area='title';
    @HostBinding('style.font-size') @Input() appGridItemTitle='0.5rem';

    // constructor(private elr:ElementRef,private rd2:Renderer2){}
    // ngOnInit(): void {
    //     this.rd2.setStyle(this.elr.nativeElement,'grid-area','title'); 
    // }
}