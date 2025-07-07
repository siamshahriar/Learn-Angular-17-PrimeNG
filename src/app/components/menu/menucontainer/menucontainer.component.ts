import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem, MessageService } from 'primeng/api';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';

import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-menucontainer',
  standalone: true,
  imports: [BreadcrumbModule, ContextMenuModule, DockModule, RadioButtonModule, CommonModule, FormsModule, MenuModule, ButtonModule, ToastModule, MenubarModule, PanelMenuModule, StepsModule, TieredMenuModule],
  templateUrl: './menucontainer.component.html',
  styleUrl: './menucontainer.component.css',
  providers: [MessageService],
})
export class MenucontainerComponent {
  items: MenuItem[] | undefined;
  items2: MenuItem[] | undefined;
  items4: MenuItem[] | undefined;

  home: MenuItem | undefined;

  items3: MenuItem[] | undefined;
  items5: MenuItem[] | undefined;
  items6: MenuItem[] | undefined;
  items7: MenuItem[] | undefined;
  items8: MenuItem[] | undefined;

  position: 'right' | 'left' | 'top' | 'bottom' = 'bottom';

  positionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' }
  ];


  ngOnInit() {
    this.items = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' }
    ];

    this.items2 = [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Rename', icon: 'pi pi-file-edit' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.items3 = [
      {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
      },
      {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
      },
      {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
      },
      {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
      }
    ];

    this.items4 = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
          }
        ]
      }
    ];

    this.items5 = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ];

    this.items6 = [
      {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Documents',
            icon: 'pi pi-file',
            items: [
              {
                label: 'Invoices',
                icon: 'pi pi-file-pdf',
                items: [
                  {
                    label: 'Pending',
                    icon: 'pi pi-stop'
                  },
                  {
                    label: 'Paid',
                    icon: 'pi pi-check-circle'
                  }
                ]
              },
              {
                label: 'Clients',
                icon: 'pi pi-users'
              }
            ]
          },
          {
            label: 'Images',
            icon: 'pi pi-image',
            items: [
              {
                label: 'Logos',
                icon: 'pi pi-image'
              }
            ]
          }
        ]
      },
      {
        label: 'Cloud',
        icon: 'pi pi-cloud',
        items: [
          {
            label: 'Upload',
            icon: 'pi pi-cloud-upload'
          },
          {
            label: 'Download',
            icon: 'pi pi-cloud-download'
          },
          {
            label: 'Sync',
            icon: 'pi pi-refresh'
          }
        ]
      },
      {
        label: 'Devices',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Phone',
            icon: 'pi pi-mobile'
          },
          {
            label: 'Desktop',
            icon: 'pi pi-desktop'
          },
          {
            label: 'Tablet',
            icon: 'pi pi-tablet'
          }
        ]
      }
    ]

    this.items7 = [
      {
        label: 'Personal',
        routerLink: 'personal'
      },
      {
        label: 'Seat',
        routerLink: 'seat'
      },
      {
        label: 'Payment',
        routerLink: 'payment'
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation'
      }
    ];

    this.items8 = [
      {
        label: 'File',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'Document',
                icon: 'pi pi-file'
              },
              {
                label: 'Image',
                icon: 'pi pi-image'
              },
              {
                label: 'Video',
                icon: 'pi pi-video'
              }
            ]
          },
          {
            label: 'Open',
            icon: 'pi pi-folder-open'
          },
          {
            label: 'Print',
            icon: 'pi pi-print'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-file-edit',
        items: [
          {
            label: 'Copy',
            icon: 'pi pi-copy'
          },
          {
            label: 'Delete',
            icon: 'pi pi-times'
          }
        ]
      },
      {
        label: 'Search',
        icon: 'pi pi-search'
      },
      {
        separator: true
      },
      {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [
          {
            label: 'Slack',
            icon: 'pi pi-slack'
          },
          {
            label: 'Whatsapp',
            icon: 'pi pi-whatsapp'
          }
        ]
      }
    ]
  }
}
