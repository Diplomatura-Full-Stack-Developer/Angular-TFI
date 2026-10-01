import { Component, inject } from '@angular/core';
import { Navbar } from '../ui/navbar/navbar';
import { UserService } from '../../features/users/services/user.service';
import { computed } from '@angular/core';
import { ProductService } from '../../features/products/services/product.service';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  imports: [Navbar, MatIcon],
  templateUrl: './header.html',
})
export class Header {

  private router = inject(Router);
  private userService = inject(UserService);
  private productService = inject(ProductService);

  cart = computed(() => this.productService.cart());

  session = computed(() => this.userService.session());

  setTitle = computed(() => this.session()?.name ? `Hola, ${this.session()?.name}` : 'Angular');

  openCart = () => {
    this.router.navigate(['/products-cart']);
  };
}
