
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadGatewayException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    if(context.switchToHttp().getRequest().originalUrl.includes('/campaign/query')){
      return next.handle().pipe();
    } else {
      return next.handle().pipe(map(data => ({ 
        status: context.switchToHttp().getResponse().statusCode,
        data,
      })));
    }
  }
}