import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { supplierServiceInterface } from '../interfaces/supplier_Service.interface';

@Injectable({
  providedIn: 'root'
})
export class SuppliersServicesService {

  constructor(private http : HttpClient) { }

  private apiUrl = ``;



  //agregar un servicio
  public set(supplier: supplierServiceInterface): Observable<any> {
    return this.http.post(this.apiUrl, supplier);
  }

  //obtener todos los servicios
  public get(): Observable<supplierServiceInterface[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //obtener un servicio por ID
  public getById(id: number): Observable<supplierServiceInterface> {
    return this.http.get<supplierServiceInterface>(`${this.apiUrl}/${id}`);
  }

  //actualizar un servicio
  public update(id: number, supplier: supplierServiceInterface): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, supplier);
  }

  //eliminar un servicio
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  //nota: resolver anys cuando la api este lista
}
