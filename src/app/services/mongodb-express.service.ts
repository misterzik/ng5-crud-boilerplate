import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MongodbExpressService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('/product');
  }

  getProductById(id: any): Observable<any> {
    return this.http.get('/product/' + id);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post('/product', product);
  }

  updateProduct(id:any, data: any): Observable<any>{
    return this.http.put('/product/' + id, data);
  }

  deleteProduct(id:any): Observable<any> {
    return this.http.delete('/product/' + id);
  }

}
