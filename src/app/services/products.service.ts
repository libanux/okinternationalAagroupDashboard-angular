import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { DateSelectedSignal } from '../signals/DateSelectedSignal.service';
import { Product } from '../classes/products.class';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = '';
  private storedToken = '';

  constructor(private httpClient: HttpClient, private dateSignal: DateSelectedSignal, private generalService: GeneralService) {
    this.apiUrl = environment.apiLocalBaseUrl;
    this.storedToken = this.generalService.storedToken
  }

  // GET TOKEN FROM LOCAL STORAGE
  getToken(): string | null {
    return localStorage.getItem('TICKET');
  }

  //GET ALL PRODUCT
  GET_ALL_PRODUCT(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.storedToken}`,
      'Content-Type': 'application/json'
    });

    return this.httpClient.get<any>(this.apiUrl + '/GET_ALL_PRODUCT', { headers });
  }

  //UPDATE PRODUCT
  UPDATE_PRODUCT(PRODUCT: Product): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.storedToken}`,
      'Content-Type': 'application/json'
    });

    const requestBody = {
      // "id": PRODUCT._id,

      // "updateData":{ 
      //     "name": PRODUCT.name,
      //     "source": PRODUCT.source,
      //     "destination": PRODUCT.destination,
      //     "sell": PRODUCT.sell,
      //     "note": PRODUCT.note,
      //     "status": PRODUCT.status,
      //     "type":PRODUCT.type,
      //     "price": PRODUCT.price
      // }
    };

    return this.httpClient.post<any>(this.apiUrl + '/UPDATE_PRODUCT', requestBody, { headers });
  }

  //ADD PRODUCT
  ADD_PRODUCT(PRODUCT: Product): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.storedToken}`,
      'Content-Type': 'application/json'
    });

    // Define the request body
    const requestBody = {
      // "name": PRODUCT.name,
      // "source": PRODUCT.source,
      // "destination": PRODUCT.destination,
      // "sell": PRODUCT.sell,
      // "note": PRODUCT.note,
      // "status": PRODUCT.status,
      // "type":PRODUCT.type,
      // "price": PRODUCT.price
    };

    return this.httpClient.post<any>(this.apiUrl + '/ADD_PRODUCT', requestBody, { headers });
  }

  //DELETE PRODUCT
  DELETE_PRODUCT(ID: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.storedToken}`,
      'Content-Type': 'application/json'
    });

    const requestBody = { "id": ID };

    return this.httpClient.post<any>(this.apiUrl + '/DELETE_PRODUCT', requestBody, { headers });
  }

  //GET PRODUCT BY ID
  GET_PRODUCT_BY_ID(paymentID: number): Observable<any> {
    const jwt = this.generalService.storedToken;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.storedToken}`,
      'Content-Type': 'application/json'
    });
    const requestBody = {
      PAYMENT_ID: paymentID
    };
    return this.httpClient.post<any>(this.apiUrl + '/GET_PAYMENT_BY_PAYMENT_ID_ADV', requestBody, { headers });
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
    return this.httpClient.post<any>(this.apiUrl + '/FILTER_ProductS_BY_DATE', requestBody, { headers })
  }

}
