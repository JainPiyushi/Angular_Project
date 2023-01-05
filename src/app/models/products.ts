export class Products {
    id: number;
    productName: string;
    description: string;
    price: number;
    imageUrl: string;
    constructor(id:number, name:string, description = '', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
      this.id = id
      this.productName = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }