import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { TableTypeInterface } from '../interfaces/table_type.interface';

@Injectable({
  providedIn: 'root'
})
export class TableTypesService {
  private route:string="/tables_types";
  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${this.route}`);
  }
  getOne(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${this.route}/${id}`);
  }
  create(request: Partial<TableTypeInterface> ): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${this.route}`, request);
  }
  update(id: any, request: Partial<TableTypeInterface>) {
    return this.http.put<void>(
      `${environment.apiUrl}${this.route}/${id}`,
      request
    );
  }
  delete(id: string|any) {
    return this.http.delete<void>(`${environment.apiUrl}${this.route}/${id}`);
  }

  
}
