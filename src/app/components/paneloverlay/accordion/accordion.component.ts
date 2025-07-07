import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { StepperModule } from 'primeng/stepper';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [AccordionModule, CardModule, ButtonModule, DividerModule, FieldsetModule, PanelModule, StepperModule, ScrollPanelModule, TabViewModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

}
