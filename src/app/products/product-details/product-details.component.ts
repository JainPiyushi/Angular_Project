import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product/product.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pId: number;
  product: any;
  allProds: any = [];
  @Input() 
  productItem!:Products
  constructor(private productService: ProductService, private route: ActivatedRoute, private msg: MessengerService, private cartService: CartService) {
    this.pId = 0;
    this.product = {}
  }

  ngOnInit() {
    this.product = {}
    this.route.params.subscribe(params => {
      this.pId = params['id'];
      this.productService.getProductById(this.pId)
        .subscribe(prod => this.product = prod.valueOf());
    });

  }
  handleAddToCart() {
    this.cartService.addProductToCart(this.product).subscribe(() => {
      this.msg.sendMsg(this.product)
    })
  }
}
