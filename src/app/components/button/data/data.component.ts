import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
// import { OrderListModule } from 'primeng/orderlist';


interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule],
  providers: [ProductService],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  layout: 'list' | 'grid' = 'list';

  products!: Product[];

  // products2!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 12)));
    // this.productService.getProductsSmall().then((cars) => (this.products2 = cars));
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  // getSeverity2(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //     default:
  //       return null;
  //   }
  // }
}
