import { Injectable } from '@angular/core';

import { MobileCrane } from '../interfaces/cranes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MobileCranesService  {
  constructor(private http: HttpClient) { }

  //code below is designed to work with in-memory-database
  private mobileCranesUrl = 'api/cranes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMobileCranes(): Observable<MobileCrane[]>{
    return this.http.get<MobileCrane[]>(this.mobileCranesUrl);
  }

  addMobileCrane(crane: MobileCrane): Observable<MobileCrane> {
    return this.http.post<MobileCrane>(this.mobileCranesUrl, crane, this.httpOptions).pipe(
      catchError(this.handleError<MobileCrane>('addMobileCrane'))
    );
  }
  
/*

getMobileCranes(): Observable<MobileCrane[]> {
    return this.http.get<MobileCrane[]>(this.mobileCranesUrl)
      .pipe(catchError(this.handleError<MobileCrane[]>('getMobileCranes', [])))
  }
  // POST: add a new MobileCrane to the server 
  addMobileCrane(crane: MobileCrane): Observable<MobileCrane> {
    return this.http.post<MobileCrane>(this.mobileCranesUrl, crane, this.httpOptions).pipe(
      catchError(this.handleError<MobileCrane>('addMobileCrane'))
    );
  }

  // DELETE: delete the MobileCrane from the server 
  deleteMobileCrane(id: number): Observable<MobileCrane> {
    const url = `${this.mobileCranesUrl}/${id}`;

    return this.http.delete<MobileCrane>(url, this.httpOptions).pipe(
      catchError(this.handleError<MobileCrane>('deleteMobileCrane'))
    );
  }

  // PUT: update the MobileCrane on the server 
  updateMobileCrane(crane: MobileCrane): Observable<any> {
    return this.http.put(this.mobileCranesUrl, crane, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMobileCrane'))
    );
  }
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
