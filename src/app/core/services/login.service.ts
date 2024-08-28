import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private route:string="/users";
  constructor(
    private http: HttpClient,
  ) { }

  login(request: Partial<UserInterface> ): Observable<any> {
    console.log("Enviando credenciales");
    console.log(request);
    return this.http.post<any>(`${environment.apiUrl}${this.route}/login`, request);
  }
}
