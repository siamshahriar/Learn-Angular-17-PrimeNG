import { Component } from '@angular/core';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [AutocompleteComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css'
})
export class FormContainerComponent {

}
