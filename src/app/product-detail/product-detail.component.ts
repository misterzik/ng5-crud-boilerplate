import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MongodbExpressService } from '../services/mongodb-express.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

  product = {};

  constructor(private router: Router, private route: ActivatedRoute, private mongoDB: MongodbExpressService) { }

  ngOnInit() {
    this.getProductDetail(this.route.snapshot.params['id']);
  }

  getProductDetail(id) {
    this.mongoDB.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }

  deleteProduct(id) {
      this.mongoDB.deleteProduct(id)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
