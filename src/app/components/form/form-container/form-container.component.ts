import { Component } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { DateComponent } from '../date/date.component';
import { CascadeSelectComponent } from '../cascade-select/cascade-select.component';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [AutocompleteComponent, DateComponent, CascadeSelectComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css'
})
export class FormContainerComponent {

}
