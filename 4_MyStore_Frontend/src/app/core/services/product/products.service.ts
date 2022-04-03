import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _productUrl = `127.0.0.1/products`;
  // private _productUrl = `mystorebdd.cffh2rvpabq7.eu-west-3.rds.amazonaws.com/products`;
  private _jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getInitProductsList(): Observable<void> {
    return this.http.get<Product[]>(this._jsonURL).pipe(
      map(products => { 
        alert(products)
        for(let i=0; i<products.length; i++) this.createProducts(products[i])
      })
    )
  }

  createProducts(product: Product): Observable<Product[]> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    return this.http.post<Product[]>(this._productUrl, product, { headers: httpHeaders })
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._productUrl);
  };

};

