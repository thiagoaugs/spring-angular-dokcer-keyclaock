import { LoaderService } from '../loader/loader.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';


// interceptor responsavel por add e remover o loading a cada requisicao


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loaderService:LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptou a request");
    this.loaderService.show();
    return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
  }


  // intercept1(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   this.loaderService.setLoading(true, request.url);
  //   return next.handle(request)
  //     .pipe(catchError((err) => {
  //       this.loaderService.setLoading(false, request.url);
  //       return err;
  //     }))
  //     .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
  //       if (evt instanceof HttpResponse) {
  //         this.loaderService.setLoading(false, request.url);
  //       }
  //       return evt;
  //     }));
  // }
}
