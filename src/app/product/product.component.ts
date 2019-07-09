import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MongodbExpressService } from '../services/mongodb-express.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  products: any;
  isEmpty: boolean;

  constructor(private mongoDB: MongodbExpressService) { 
    this.isEmpty = false;
  }

  ngOnInit() {
    this.mongoDB.getProducts().subscribe(data => {
        // console.log(data);
        this.products = data;
        if (this.products.length <= 0) {
          this.isEmpty = true;
        }
      });
  }

}
