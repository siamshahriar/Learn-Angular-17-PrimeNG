import { Component } from '@angular/core'; import { MessageService } from 'primeng/api';
import { DeferModule } from 'primeng/defer';
import { ToastModule } from 'primeng/toast';
import { FocusTrapModule } from 'primeng/focustrap';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { AutoFocusModule } from 'primeng/autofocus';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [DeferModule, ToastModule, FocusTrapModule, ButtonModule, DropdownModule, FormsModule, InputTextModule, StyleClassModule, RippleModule, AutoFocusModule, AnimateOnScrollModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
  providers: [MessageService]
})
export class DirectivesComponent {
  constructor(private messageService: MessageService) { }

  onLoad() {
    this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
  }

  selectedCity: string | undefined;

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
}
