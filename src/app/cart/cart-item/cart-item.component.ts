import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartComponent } from '../cart.component';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any

  constructor(private cartService: CartService, private cartcomponent:CartComponent) { 
    
  }

  ngOnInit() 
  {
    
  }
cancelItem(pid:number){
  this.cartService.deleteItem(pid)
  .subscribe((response) => {
    alert(`Item deleted successfully.`);
  });
this.cartcomponent.loadCartItems();
}

}
