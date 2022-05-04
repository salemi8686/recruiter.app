import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from './modlues';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) { }


  getTemplates(): Observable<Template[]> {
    return this.http.get<Template[]>(`http://127.0.0.1:8000/api/templates/`)
  }

  getTemplate(id: number): Observable<Template> {
    return this.http.get<Template>(`http://127.0.0.1:8000/api/templates/${id}/`)
  }

  addTemplate(template: Template): Observable<Template> {
    return this.http.post<Template>(`http://127.0.0.1:8000/api/templates/`, template)
  }
}
