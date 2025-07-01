import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CalendarModule, FormsModule, FloatLabelModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  date: Date | undefined;
  dates: Date[] = [];
}
