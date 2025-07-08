import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../button/orderlist/orderlist.component';
import { PhotoService } from '../../../service/photo.service';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, GalleriaModule, FormsModule, ImageModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css',
  providers: [ProductService, PhotoService],
})
export class MediaComponent {
  products: Product[] = [];

  responsiveOptions: any[] | undefined;

  images: any[] | undefined;

  responsiveOptions2: any[] | undefined;

  constructor(private productService: ProductService, private photoService: PhotoService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions2 = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  getSeverity(status: string): 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined; // <-- instead of ""
    }
  }
}
