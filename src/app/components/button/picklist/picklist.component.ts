import { Component, ChangeDetectorRef } from '@angular/core';
import { PickListModule } from 'primeng/picklist';
import { ProductService } from '../../../service/product.service';

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
  selector: 'app-picklist',
  standalone: true,
  imports: [PickListModule],
  templateUrl: './picklist.component.html',
  styleUrl: './picklist.component.css',
  providers: [ProductService] 
})
export class PicklistComponent {
  sourceProducts!: Product[];

  targetProducts!: Product[];

  constructor(
    private carService: ProductService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.carService.getProductsSmall().then(products => {
      this.sourceProducts = products;
      this.cdr.markForCheck();
    });
    this.targetProducts = [];
  }
}
