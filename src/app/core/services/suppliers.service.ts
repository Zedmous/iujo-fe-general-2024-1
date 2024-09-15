import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupplierInterface } from '../interfaces/supplier.interface';


@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private apiUrl = `http://localhost:3000/supplier`;

  constructor(private http: HttpClient) { }

  //agregar un proveedor
  public set(supplier: SupplierInterface): Observable<any> {
    return this.http.post(`${this.apiUrl}`, supplier);
  }

  //obtener todos los proveedores
  public get(): Observable<SupplierInterface[]> {
    return this.http.get<SupplierInterface[]>(this.apiUrl);
  }

  //obtener un proveedor por ID
  public getById(id: number): Observable<SupplierInterface> {
    return this.http.get<SupplierInterface>(`${this.apiUrl}/${id}`);
  }

  //actualizar un proveedor
  public update(id: number, supplier: SupplierInterface): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, supplier);
  }

  //eliminar un proveedor
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  //nota: resolver anys cuando la api este lista
}
