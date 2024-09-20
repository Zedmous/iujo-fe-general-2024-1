import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ConceptsInterface } from '../interfaces/concept.interface';

@Injectable({
  providedIn: 'root'
})
export class ConceptService {
  private route: string = '/concepts'; // Ruta base para los conceptos

  constructor(private http: HttpClient) {}

  getAll(): Observable<ConceptsInterface[]> {
    return this.http.get<ConceptsInterface[]>(`${environment.apiUrl}${this.route}`);
  }

  create(request: Partial<ConceptsInterface>): Observable<ConceptsInterface> {
    return this.http.post<ConceptsInterface>(`${environment.apiUrl}${this.route}`, request);
  }

  update(id: number, request: Partial<ConceptsInterface>): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}${this.route}/${id}`, request);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}${this.route}/${id}`);
  }
}
