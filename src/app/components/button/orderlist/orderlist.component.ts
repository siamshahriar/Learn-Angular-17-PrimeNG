import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { OrderListModule } from 'primeng/orderlist';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

export interface Product {
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
  selector: 'app-orderlist',
  standalone: true,
  imports: [OrderListModule, OrganizationChartModule, PaginatorModule],
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.css',
  providers: [ProductService]
})
export class OrderlistComponent {
  products!: Product[];
  data: TreeNode[] = [
    {
      label: 'F.C Barcelona',
      expanded: true,
      children: [
        {
          label: 'Argentina',
          expanded: true,
          children: [
            {
              label: 'Argentina'
            },
            {
              label: 'France'
            }
          ]
        },
        {
          label: 'France',
          expanded: true,
          children: [
            {
              label: 'France'
            },
            {
              label: 'Morocco'
            }
          ]
        }
      ]
    }
  ];

  first: number = 0;

  rows: number = 10;


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((cars) => (this.products = cars));
  }


  onPageChange(event: PageEvent) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }

  getSeverity(status: string): 'success' | 'warning' | 'danger' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }
}
