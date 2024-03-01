import { Component, Input , EventEmitter, Output} from '@angular/core';
import { Product, products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  @Input () id: number | undefined;
  products: Product[] = products;
  searchInput: string = '';
  isLike = false;

  get filteredProducts(): Product[] {
    const searchTerm = this.searchInput.toLowerCase();
    return this.products.filter(product => product.name.toLowerCase().includes(searchTerm));
  }

  sharetg(productName: string, productLink: string) {
    const shareMessage = `Check out this product: ${productName} - ${productLink}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }

  remove(id: number){
    this.products = this.products.filter((x) => x.id !== id);
  }
  clickLike(product: Product){
    if(!this.isLike){
      product.likes++;
    }
    else{
      product.likes--;
    }
    this.isLike = !this.isLike;
  }

}
