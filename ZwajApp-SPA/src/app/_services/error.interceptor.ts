import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { error } from "console";
import { Observable, catchError, tap, throwError } from "rxjs";
import { app } from "../../../server";

@Injectable()

  export class ErrorInterceptor implements HttpInterceptor {
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
         
            if(error instanceof HttpErrorResponse){
                const applicationError= error.headers.get('Application-Error');
                if(applicationError){
                    console.error(applicationError);
                    return throwError(() => error);
                }
            }
                        //ModelSate Error
            const serverError=error.error;
            let modelStateErrors='';
            if(serverError && typeof serverError==='object'){
                for(const key in serverError){
                    if(serverError[key]){
                        modelStateErrors+=serverError[key]+'\n';

                    }
                }
            }

            //Unauthorized Error
            if(error.status===401){
                return throwError(()=> error.statusText);
            }
            return throwError(()=> modelStateErrors || serverError || 'Server Error');
        })
      );
    }
  }
  
    export const ErrorInterceptorProvider={
        provide:HTTP_INTERCEPTORS,
        useClass:ErrorInterceptor,
        multi:true
    }