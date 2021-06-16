import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models';
import { productsArray } from '../utils/product-data.mock';

@Injectable({
  providedIn: 'root',
})
export class DeclarativeDataAccessService {
  constructor() {}

  products$: Observable<Product[]> = of(productsArray);

  getProducts(): Observable<Product[]> {
    return of(productsArray);
  }
}
