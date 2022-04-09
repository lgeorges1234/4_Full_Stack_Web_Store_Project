import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private _productUrl = `127.0.0.1/products`;
  private _productUrl = `http://MyStore-api-dev.eu-west-3.elasticbeanstalk.com/products`;
  private _jsonURL = '../../../assets/data.json';

  constructor(private http: HttpClient) { }

  getInitProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(this._jsonURL)
  }

  createProducts(product: Product): Observable<Product> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    // alert(`Product created: ${JSON.stringify(product)}`)
    return this.http.post<Product>(this._productUrl, product, { headers: httpHeaders })
  }

  getProducts(): Observable<Product[]> {
    alert(`GetProdduct:${JSON.stringify(this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'))}`);
    return this.http.get<Product[]>(this._productUrl)
  };

};

