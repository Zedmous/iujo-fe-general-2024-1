import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { RoomTypeInterface } from '../interfaces/room_type.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  private route:string="/room_types";
  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${this.route}`);
  }
  getOne(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${this.route}/${id}`);
  }
  create(request: Partial<RoomTypeInterface> ): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${this.route}`, request);
  }
  update(id: any, request: Partial<RoomTypeInterface>) {
    return this.http.put<void>(
      `${environment.apiUrl}${this.route}/${id}`,
      request
    );
  }
  delete(id: string|any) {
    return this.http.delete<void>(`${environment.apiUrl}${this.route}/${id}`);
  }

}
