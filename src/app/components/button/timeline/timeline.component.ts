import { Component } from '@angular/core';

import { TimelineModule } from 'primeng/timeline';
import { NodeService } from '../../../service/node.service';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';


interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}


@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TimelineModule, TreeModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  providers: [NodeService, TreeDragDropService]
})
export class TimelineComponent {
  events: EventItem[];
  files!: TreeNode[];

  constructor(private nodeService: NodeService) {
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
  }




  ngOnInit() {
    this.nodeService.getFiles().then((data) => (this.files = data));
  }
}
