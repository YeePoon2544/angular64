import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://fakestoreapi.com/products';
  constructor(private HttpClient: HttpClient) { }

  getProducts(): Observable<any>{
    return this.HttpClient.get(this.url);
  }
  
  
}
