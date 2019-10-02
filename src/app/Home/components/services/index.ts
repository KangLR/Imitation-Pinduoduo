import { InjectionToken } from '@angular/core';

export * from './home.service';
export const token=new InjectionToken<string>('baseUrl');

//创建一个Token,避免名称冲突
    // token=new InjectionToken<string>('baseUrl');
    // {
    //     provide:token,
    //     useValue:'http://localhost'
    // }
    // console.log(injector.get(token))