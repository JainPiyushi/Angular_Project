import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from 'src/app/models/cart-item';
//import { cartUrl } from '../config/api';
import { Products } from 'src/app/models/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
cartUrl:string = "http://localhost:12345/cart";
  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>(this.cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Products): Observable<any> {
    return this.http.post(this.cartUrl, { product });
  }

  emptyCart(){
    return this.http.delete(this.cartUrl);
  }
}