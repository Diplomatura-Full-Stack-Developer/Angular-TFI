import { inject, Service, signal } from '@angular/core';
import { ICartProduct, IProduct } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
@Service()
export class ProductService {

  private apiUrl = 'data/products.json';

  private http = inject(HttpClient);

  private persist(): void {
    localStorage.setItem('products', JSON.stringify(this.products()));
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }

  products = signal<IProduct[]>([]);
  cart = signal<ICartProduct[]>([]);

  private readonly _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  seedProducts(): void {
    const stored = localStorage.getItem('products');
    if (stored !== null) {
      this.products.set(JSON.parse(stored) as IProduct[]);
      return;
    }

    this.http.get<IProduct[]>(this.apiUrl).pipe(
      catchError((error) => {
        this._error.set(`Error loading products: ${error.message}`);
        return of([]);
      }),
    ).subscribe((data) => {
      if (data.length === 0 && this._error()) {
        return;
      }
      const withIds = data.map((p) => ({ ...p, id: crypto.randomUUID(), createdAt: new Date(), deleted: false }));
      this.products.set(withIds);
      this._error.set(null);
      this.persist();
    });
  }

  getProductById(id: string): IProduct | undefined {
    return this.products().find((p) => p.id === id);
  }

  addProduct(product: IProduct): void {
    try {
      this.products.update((list) => [...list, product]);
      this.persist();
    } catch (error) {
      this._error.set(`Error adding product: ${error as string}`);
    }
  }

  deleteProduct(id: string): void {
    try {
      this.products.update((list) =>
        list.map((p) => (p.id === id ? { ...p, deleted: true } : p)),
      );
      this.persist();
    } catch (error) {
      this._error.set(`Error deleting product: ${error as string}`);
    }
  }

  addProductToCart(product: ICartProduct): void {

    try {
      const existing = this.cart().find((p) => p.id === product.id);
      if (existing) {
        this.cart.update((list) => list.map((p) => (p.id === product.id ? { ...p, quantity: (p as ICartProduct).quantity + 1 } : p)));
      } else {
        this.cart.update((list) => [...list, { ...product, quantity: 1 }]);
      }
      this.persist();
    } catch (error) {
      this._error.set(`Error adding product to cart: ${error as string}`);
    }
  }

  removeProductFromCart(id: string): void {
    try {
      this.cart.update((list) => list.filter((p) => p.id !== id));
      this.persist();
    } catch (error) {
      this._error.set(`Error removing product from cart: ${error as string}`);
    }
  }

}
