import { Injectable } from '@angular/core';
import { RoleInterface } from '../interfaces/role.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private route:string="/roles";
  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${this.route}`);
  }
  getOne(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${this.route}/${id}`);
  }
  create(request: Partial<RoleInterface> ): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${this.route}`, request);
  }
  update(id: any, request: Partial<RoleInterface>) {
    return this.http.put<void>(
      `${environment.apiUrl}${this.route}/${id}`,
      request
    );
  }
  delete(id: string|any) {
    return this.http.delete<void>(`${environment.apiUrl}${this.route}/${id}`);
  }
}
