import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthOneInterceptorInterceptor implements HttpInterceptor {


  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let clonedRequest = req.clone();

    // Set the content type
    clonedRequest = clonedRequest.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

    // Get the token from local storage or any other storage mechanism
    const access_token = localStorage.getItem('access_token'); 

    // If the token exists, set the Authorization header
    if (access_token) {
      clonedRequest = clonedRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`
        }
      });
    }

    // Pass the cloned request 
    return next.handle(clonedRequest);
  }
}
