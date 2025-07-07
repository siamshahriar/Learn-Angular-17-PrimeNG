import { InputMaskModule } from 'primeng/inputmask';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputOtpModule } from 'primeng/inputotp';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TreeSelectModule } from 'primeng/treeselect';
import { ToggleButtonModule } from 'primeng/togglebutton';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [EditorModule, FormsModule, ReactiveFormsModule, InputMaskModule, InputSwitchModule, InputTextModule, FloatLabelModule, InputTextareaModule, InputOtpModule, KnobModule, ListboxModule, MultiSelectModule, RadioButtonModule, CommonModule, SelectButtonModule, SliderModule, TreeSelectModule, ToggleButtonModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})

export class EditorComponent {
  text: string | undefined;

  value: string | undefined;

  checked: boolean = true;

  formGroup!: FormGroup;

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

  nodes!: any[];
  cities!: City[];

  formGroup2!: FormGroup;
  formGroup3!: FormGroup;
  formGroup4!: FormGroup;
  formGroup5!: FormGroup;
  formGroup6!: FormGroup;
  formGroup7!: FormGroup;

  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
  ];
  value2!: number;

  paymentOptions: any[] = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl(null),
    });
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.formGroup2 = new FormGroup({
      selectedCity: new FormControl<City | null>(null)
    });
    this.formGroup3 = new FormGroup({
      selectedCities: new FormControl<City[] | null>([{ name: 'Istanbul', code: 'IST' }])
    });
    this.formGroup4 = new FormGroup({
      selectedCategory: new FormControl(this.categories?.find(each => each.name === "Production") || null),
    });
    this.formGroup5 = new FormGroup({
      value2: new FormControl(50),
    })
    this.nodes = [{
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [
            { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
            { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
          ]
        },
        {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
      ]
    }]
    this.formGroup6 = new FormGroup({
      selectedNodes: new FormControl()
    });
    this.formGroup7 = new FormGroup({
      checked: new FormControl<boolean>(false)
    });
  }


}
