import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { ConfirmPopupModule } from 'primeng/confirmpopup';

import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { TableModule } from 'primeng/table';
import { ProductService } from '../../../service/product.service';

import { OverlayPanel } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar'
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadEvent } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';


interface TableRowSelectEvent {
  originalEvent?: Event;
  data?: any;
  type?: string;
  index?: number;
}

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

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [ConfirmDialogModule, ToastModule, ButtonModule, ConfirmPopupModule, DialogModule, InputTextModule, TableModule, OverlayPanelModule, SidebarModule, CommonModule, TooltipModule, FileUploadModule, HttpClientModule],
  providers: [ConfirmationService, MessageService, ProductService],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css'
})
export class OverlayComponent {
  position: string = 'center';

  visible: boolean = false;
  products: Product[] = [];

  selectedProduct: Product | undefined;

  sidebarVisible1: boolean = false;

  sidebarVisible2: boolean = false;

  sidebarVisible3: boolean = false;

  sidebarVisible4: boolean = false;

  uploadedFiles: any[] = [];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private productService: ProductService, private cdr: ChangeDetectorRef) { }


  onUpload(event: FileUploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
  showDialog() {
    this.visible = true;
  }

  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({

      message: 'Are you sure you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
      },
      key: 'positionDialog'
    });
  }

  confirm1(event: Event) {
    this.confirmationService.confirm({
      key: 'confirmDialog',
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }

  confirm2(event: Event) {
    this.confirmationService.confirm({
      key: 'confirmDialog',
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",

      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }


  confirm3(event: Event) {
    this.confirmationService.confirm({
      key: 'confirmPopup',
      target: event.target as EventTarget,
      message: 'Are you sure you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }

  confirm4(event: Event) {
    this.confirmationService.confirm({
      key: 'confirmPopup',
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
      this.selectedProduct = products[0];
      this.cdr.markForCheck()
    });
  }

  onRowSelect(event: TableRowSelectEvent, op: OverlayPanel) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
    op.hide();
  }

}
