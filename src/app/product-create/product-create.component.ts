import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MongodbExpressService } from '../services/mongodb-express.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCreateComponent implements OnInit {

  product = {};

  constructor(private router: Router, private mongoDB: MongodbExpressService) { }

  ngOnInit() {
  }

  saveProduct() {
    this.mongoDB.createProduct(this.product)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
