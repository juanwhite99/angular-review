export class Product {
  id?: number;
  name?: string;

  constructor(params?: Product) {
    Object.assign(this, params);
  }
}
