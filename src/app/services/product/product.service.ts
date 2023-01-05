import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private httpUrl: string = AppConfig.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllProducts = () => {
    console.log('getAllProducts');
    return this.http.get(`${this.httpUrl}/products`);
  };

  getProductById = (pid: number) => {
    console.log('getAllProducts');
    return this.http.get(`${this.httpUrl}/products/${pid}`);
  };

  getProductByName(pName: string) {
    return this.http.get(`${this.httpUrl}/products?productName=${pName}`)
  }
}
