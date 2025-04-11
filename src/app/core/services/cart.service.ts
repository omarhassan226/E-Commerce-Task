import { inject, Injectable } from '@angular/core';
import { ICart } from '../models/cart.model';
import { ProductsService } from './products.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  /* Start of Private Region */
  private productsService = inject(ProductsService);
  /* End of Private Region */

  /* Start of Public Region */
  public isCartOpen = false;
  public cart: ICart[] = [];
  /* End of Public Region */

  addProductToTheCart(productId: string) {
    const cartIndex = this.cart.findIndex((cartItem) => cartItem.product.id === productId);

    if (cartIndex !== -1) {
      this.cartAlarts(this.cart[cartIndex]);
      this.increaseCartItemQuantity(this.cart[cartIndex]);
      this.isCartOpen = true;
      return;
    }

    const product = this.productsService.products.find((product) => product.id === productId);

    if (product) {
      const newCartItem: ICart = {
        product,
        quantity: 1,
      };

      this.cart.push(newCartItem);
      this.cartAlarts(newCartItem);
    }

    this.isCartOpen = true;
    this.updateLocalStorage();
  }

  cartAlarts(cartItem: ICart) {
    if (cartItem.quantity === cartItem.product.stock) {
      Swal.fire({
        icon: 'warning',
        title: 'Stock limit reached!',
        text: 'You cannot add more of this item to your cart.',
        showConfirmButton: true,
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Product added!',
        text: 'Check your cart for more details.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  }

  increaseCartItemQuantity(cartItem: ICart) {
    if (cartItem.quantity < cartItem.product.stock) {
      cartItem.quantity++;
      this.updateLocalStorage();
    }
  }

  decreaseCartItemQuantity(cartItem: ICart) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.updateLocalStorage();
    }
  }

  removeCartItem(productId: string) {
    this.cart = this.cart.filter((cartItem) => cartItem.product.id !== productId);
    this.updateLocalStorage();
  }

  getTotalPrice() {
    let totalPrice = 0;

    this.cart.forEach((cartItem) => {
      totalPrice += cartItem.quantity * cartItem.product.price;
    });

    return totalPrice;
  }

  getTotalQuantity() {
    let totalQuantity = 0;

    this.cart.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });

    return totalQuantity;
  }

  getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');

    if (cart) {
      this.cart = JSON.parse(cart);
    }
  }

  updateLocalStorage() {
    const cart = JSON.stringify(this.cart);

    localStorage.setItem('cart', cart);
  }
}
