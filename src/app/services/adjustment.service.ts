import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { DateSelectedSignal } from '../signals/DateSelectedSignal.service';
import { Adjustment } from '../classes/adjustment.class';

@Injectable({
  providedIn: 'root'
})
export class adjustmentsService {

  private apiUrl = '';

  constructor(private http: HttpClient,private dateSignal : DateSelectedSignal,) {
    this.apiUrl = environment.apiLocalBaseUrl;
  }

  // GET TOKEN FROM LOCAL STORAGE
  getToken(): string | null {
    return localStorage.getItem('TICKET');
  }

  // GET adjustmentS
  GET_ADJUSTMENT(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(`${this.apiUrl}/GET_ALL_adjustmentS`, { headers });
  }

// ADD adjustment
ADD_ADJUSTMENT(newadjustment: Adjustment): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json'
    });
    const requestBody = {
      // "name": newadjustment.name,
      // "destination": newadjustment.destination,
      // "numberOfPeople": newadjustment.numberOfPeople,
      // "duration": newadjustment.duration,
      // "price": newadjustment.price,
      // "hotels": newadjustment.hotels,
      // "status": newadjustment.status,
      // "sell": newadjustment.sell,
      // "note": newadjustment.note
    };
    return this.http.post<any>(this.apiUrl + '/ADD_adjustment', requestBody, { headers })

}

// DELETE adjustment
DELETE_ADJUSTMENT(deladjustment: Adjustment): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.getToken()}`,
        'Content-Type': 'application/json'
      });
      const requestBody = {
      //  "id":deladjustment._id
      };
      return this.http.post<any>(this.apiUrl + '/DELETE_adjustment', requestBody, { headers })
}

// FILTER adjustment BY DATE
FILTER_ADJUSTMENT(filterType: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.getToken()}`,
    'Content-Type': 'application/json'
  });

  const requestBody = {
    "filterType": filterType,
    "startDate": this.dateSignal.startDate(),
    "endDate": this.dateSignal.endDate()
   };
  return this.http.post<any>(this.apiUrl + '/FILTER_adjustmentS_BY_DATE', requestBody, { headers })
}

}
