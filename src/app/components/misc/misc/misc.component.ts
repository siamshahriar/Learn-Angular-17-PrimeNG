import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { MeterGroupModule } from 'primeng/metergroup';
import { ScrollTopModule } from 'primeng/scrolltop';
import { InplaceModule } from 'primeng/inplace';
import { ProgressBarModule } from 'primeng/progressbar';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag'
import { TerminalService } from 'primeng/terminal';
import { TerminalModule } from 'primeng/terminal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-misc',
  standalone: true,
  imports: [AvatarModule, BadgeModule, BlockUIModule, ButtonModule, PanelModule, RippleModule, ChipModule, InplaceModule, MeterGroupModule, ScrollTopModule, SkeletonModule, ProgressBarModule, ProgressSpinnerModule, TagModule, TerminalModule],
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.css',
  providers: [TerminalService]
})
export class MiscComponent {
  blockedPanel: boolean = false;
  value = [
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
  ];

  subscription: Subscription;

  constructor(private terminalService: TerminalService) {
    this.subscription = this.terminalService.commandHandler.subscribe((command) => {
      let response = command === 'date' ? new Date().toDateString() : 'Unknown command: ' + command;
      this.terminalService.sendResponse(response);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
