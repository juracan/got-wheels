import {
  throwError as observableThrowError,
  Observable,
  throwError,
} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class HotWheelsApiService {
  GetProductDetailByToyNumberUrl =
    'https://product.mattel.com/api/ProductInfo/GetProductDetailByToyNumber';

  constructor(private http: HttpClient, private log: LoggerService) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCarData(toyNumber: string): Observable<any> {
    return this.http
      .post<any>(
        this.GetProductDetailByToyNumberUrl,
        { toyNumber },
        this.httpOptions
      )
      .pipe(
        tap((data) => this.log.info('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCarImageBySku(sku: string): string {
    // const altUrl =
    //   'https://images.mattel.com/scene7/' +
    //   sku +
    //   '_01?$oszoom$&template=HWCBackgroundTemplate&wid=1600&hei=1600';
    return (
      'https://images.mattel.com/scene7//wcsstore/MattelCAS/CFK31_01?$ossmallindex$&storeId=10151&SKU=' +
      sku.toUpperCase()
    );
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    this.log.error(errorMessage);
    return throwError(errorMessage);
  }
}
