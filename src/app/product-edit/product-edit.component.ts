import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MongodbExpressService } from '../services/mongodb-express.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductEditComponent implements OnInit {

  product: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private mongoDB: MongodbExpressService) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
  }

  getProduct(id) {
    this.mongoDB.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }

  updateProduct(id) {
    this.product.updated_date = Date.now();
    this.mongoDB.updateProduct(id, this.product)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
