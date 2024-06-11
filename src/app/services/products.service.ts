import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { DateSelectedSignal } from '../signals/DateSelectedSignal.service';
import { Product } from '../classes/products.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = '';

  constructor(private http: HttpClient, private dateSignal : DateSelectedSignal,) {
    this.apiUrl = environment.apiLocalBaseUrl;
  }

  // GET TOKEN FROM LOCAL STORAGE
  getToken(): string | null {
    return localStorage.getItem('TICKET');
  }

  // GET ProductS
  GET_PRODUCT(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(`${this.apiUrl}/GET_ALL_ProductS`, { headers });
  }

// ADD Product
ADD_PRODUCT(newProduct: Product): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
    const requestBody = {
      // "name": newProduct.name,
      // "destination": newProduct.destination,
      // "numberOfPeople": newProduct.numberOfPeople,
      // "duration": newProduct.duration,
      // "price": newProduct.price,
      // "hotels": newProduct.hotels,
      // "status": newProduct.status,
      // "sell": newProduct.sell,
      // "note": newProduct.note
    };
    return this.http.post<any>(this.apiUrl + '/ADD_Product', requestBody, { headers })

}

// DELETE Product
DELETE_PRODUCT(delProduct: Product): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.getToken()}`,
        'Content-Type': 'application/json'
      });
      const requestBody = {
      //  "id":delProduct._id
      };
      return this.http.post<any>(this.apiUrl + '/DELETE_Product', requestBody, { headers })
}

// FILTER Product BY DATE
FILTER_PRODUCT(filterType: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.getToken()}`,
    'Content-Type': 'application/json'
  });

  const requestBody = {
    "filterType": filterType,
    "startDate": this.dateSignal.startDate(),
    "endDate": this.dateSignal.endDate()
   };
  return this.http.post<any>(this.apiUrl + '/FILTER_ProductS_BY_DATE', requestBody, { headers })
}

}
