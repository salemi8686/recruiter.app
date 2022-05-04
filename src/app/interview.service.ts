import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interview } from './modlues';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http: HttpClient) { }

  getInterviews(): Observable<Interview[]> {
    return this.http.get<Interview[]>(`http://127.0.0.1:8000/api/interviews/`)
  }

  getInterview(id: number): Observable<Interview> {
    return this.http.get<Interview>(`http://127.0.0.1:8000/api/interviews/${id}/`)
  }

  addInterview(interview: Interview): Observable<Interview> {
    return this.http.post<Interview>(`http://127.0.0.1:8000/api/interviews/`, interview)
  }

  deleteInterview(id: number): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/interviews/${id}/`);
  }
}
