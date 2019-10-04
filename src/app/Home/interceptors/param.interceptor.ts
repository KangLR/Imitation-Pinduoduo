import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifiedReq=req.clone({
            setParams:{icode:environment.iCode}
        })
        return next.handle(modifiedReq);
    }

    //HttpHandler是请求处理完交给下一个去处理
}