import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  //append $ to property name of observables
  products$: Observable<Product[]> = this.productService.products$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return of([]);
        //OR return EMPTY;
      })
    );

  constructor(private productService: ProductService) { }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
