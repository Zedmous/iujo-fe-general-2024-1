import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ConceptsInterface } from '../interfaces/concept.interface';

@Injectable({
  providedIn: 'root'
})
export class ConceptService {
  private route:string="/concepts";
  constructor(
    private http: HttpClient,
  )
  { }

  getAll():Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${this.route}`);
  }

  create(request: Partial<ConceptsInterface> ): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${this.route}`, request);
  }
  update(id: any, request: Partial<ConceptsInterface>) {
    return this.http.put<void>(
      `${environment.apiUrl}${this.route}/${id}`,
      request
    );
  }
  delete(id: string|any) {
    return this.http.delete<void>(`${environment.apiUrl}${this.route}/${id}`);
  }
}
