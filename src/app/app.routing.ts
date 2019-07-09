import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const appRoutes: Routes = [
    {
      path: 'products',
      component: ProductComponent,
      data: { title: 'Product List' }
    },
    {
      path: 'product-details/:id',
      component: ProductDetailComponent,
      data: { title: 'Product Details' }
    },
    {
      path: 'product-create',
      component: ProductCreateComponent,
      data: { title: 'Create Product' }
    },
    {
      path: 'product-edit/:id',
      component: ProductEditComponent,
      data: { title: 'Edit Product' }
    },
    {
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
    }
  ];

export const AppRouting = RouterModule.forRoot(appRoutes);