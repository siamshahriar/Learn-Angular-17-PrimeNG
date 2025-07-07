import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { OverlayComponent } from '../overlay/overlay.component';

@Component({
  selector: 'app-paneloverlaycontainer',
  standalone: true,
  imports: [AccordionComponent, OverlayComponent],
  templateUrl: './paneloverlaycontainer.component.html',
  styleUrl: './paneloverlaycontainer.component.css'
})
export class PaneloverlaycontainerComponent {

}
