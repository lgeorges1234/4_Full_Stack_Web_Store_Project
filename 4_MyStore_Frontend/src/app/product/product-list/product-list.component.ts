import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/product/products.service';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/model/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  productsList: Product[] = [];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // get initial products from the json files and create a product for each entries
    this.productsService.getInitProductsList().pipe(
      map(result => {
        this.productsService.getProducts().subscribe((res: Product[]) => {
          this.productsList = res;
        })
        this.productsService.getProducts().subscribe((res) => {
          for (let index = 0; index < res.length; index++) {
            const product = res[index];
            product["quantity"] = 0;
          }
          this.productsList = res;
        });          
      })
    )
  }
}
          // get all products from the api
        

  //   this.productsService.getProducts().subscribe((res: any) => {
  //     this.productsList = res;
  //   });
  //   this.productsService.getProducts().subscribe((res) => {
  //     for (let index = 0; index < res.length; index++) {
  //       const product = res[index];
  //       product["quantity"] = 0;
  //     }
  //     this.productsList = res;
  //   });
  // })
    


