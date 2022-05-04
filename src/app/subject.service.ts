import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Subject, SubjectIn } from './modlues';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  addSubject(subject: SubjectIn): Observable<SubjectIn> {
    console.log("OK");
    return this.http.post<SubjectIn>(`http://127.0.0.1:8000/api/subjects/`, subject)
  }

}
