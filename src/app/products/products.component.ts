import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppConfig } from '../config/AppConfig';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsList: any;

  constructor(private productService: ProductService) {
    this.productService.getAllProducts()
      .subscribe((productsArray) => {
        this.productsList = productsArray.valueOf();
        for (const product of this.productsList)
          console.log(product);
      });
  };


  // getAllProds = () => {
  //   this.productService.getAllProducts()
  //     .subscribe((productsArray) => {
  //       this.productsList = productsArray.valueOf();
  //       for (const product of this.productsList)
  //         console.log(product);
  //     });
  // };
}
