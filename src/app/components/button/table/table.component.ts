import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CustomerService } from '../../../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
// import { Customer } from '../../../domain/customer';


export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, HttpClientModule, ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [CustomerService]
})
export class TableComponent {
  customers!: Customer[];

  constructor(private customerService: CustomerService) { }

  cols!: Column[];

  exportColumns!: ExportColumn[];

  ngOnInit() {
    this.customerService.getCustomersMedium().then((data) => {
      this.customers = data;
    });
    this.cols = [
      { field: 'id', header: 'Id', customExportHeader: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'balance', header: 'Balance' },
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }))
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}
