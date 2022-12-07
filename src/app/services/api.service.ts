import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = 'https://api.pujakaitem.com/api/products';

  getProducts(){
    return this.http.get(this.url);
  }
}
