import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseOrderInterface } from '../interfaces/purchase_order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http : HttpClient) { }

  private apiUrl = ``;

  //agregar una orden
  public set(supplier: PurchaseOrderInterface): Observable<any> {
    return this.http.post(this.apiUrl, supplier);
  }

  //obtener todos las ordenes
  public get(): Observable<PurchaseOrderInterface[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //obtener una orden por ID
  public getById(id: number): Observable<PurchaseOrderInterface> {
    return this.http.get<PurchaseOrderInterface>(`${this.apiUrl}/${id}`);
  }

  //actualizar una orden
  public update(id: number, supplier: PurchaseOrderInterface): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, supplier);
  }

  //eliminar una orden
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  //nota: resolver anys cuando la api este lista
}
