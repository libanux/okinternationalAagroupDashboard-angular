import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { DateSelectedSignal } from '../signals/DateSelectedSignal.service';
import { Product } from '../classes/products.class';

@Injectable({
  providedIn: 'root'
})
export class stocksService {

  private apiUrl = '';

  constructor(private http: HttpClient,private dateSignal : DateSelectedSignal,) {
    this.apiUrl = environment.apiLocalBaseUrl;
  }

  // GET TOKEN FROM LOCAL STORAGE
  getToken(): string | null {
    return localStorage.getItem('TICKET');
  }

  // GET stockS
  GET_stock(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(`${this.apiUrl}/GET_ALL_stockS`, { headers });
  }

// ADD stock
ADD_stock(newstock: Product): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
    const requestBody = {
      // "name": newstock.name,
      // "destination": newstock.destination,
      // "numberOfPeople": newstock.numberOfPeople,
      // "duration": newstock.duration,
      // "price": newstock.price,
      // "hotels": newstock.hotels,
      // "status": newstock.status,
      // "sell": newstock.sell,
      // "note": newstock.note
    };
    return this.http.post<any>(this.apiUrl + '/ADD_stock', requestBody, { headers })

}

// DELETE stock
DELETE_stock(delstock: Product): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.getToken()}`,
        'Content-Type': 'application/json'
      });
      const requestBody = {
      //  "id":delstock._id
      };
      return this.http.post<any>(this.apiUrl + '/DELETE_stock', requestBody, { headers })
}

// FILTER stock BY DATE
FILTER_stock(filterType: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.getToken()}`,
    'Content-Type': 'application/json'
  });

  const requestBody = {
    "filterType": filterType,
    "startDate": this.dateSignal.startDate(),
    "endDate": this.dateSignal.endDate()
   };
  return this.http.post<any>(this.apiUrl + '/FILTER_stockS_BY_DATE', requestBody, { headers })
}

}
