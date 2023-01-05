import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {

  searchQuery: string;
  allProds: any = [];

  constructor(private router: Router, private productService: ProductService) { this.searchQuery = ''; }

  searchProduct() {
    this.productService.getAllProducts().subscribe((prod) => {
      this.allProds = prod.valueOf();
      for (const prod of this.allProds) {
        console.log(prod.productName.toLowerCase());
        if (prod.productName.toLowerCase().search(this.searchQuery.toLowerCase()) >= 0) {
          this.productService.getProductById(prod.id)
            .subscribe(resp => {
              this.router.navigate(['/product-details', prod.id]);
            });
        }
      }
    });
  }
}
 