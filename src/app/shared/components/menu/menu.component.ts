import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  public menuItems : MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
            {
              label: 'Texts and Dates',
              icon: 'pi pi-align-left',
              routerLink: ['/']
            },
            {
              label: 'Numbers',
              icon: 'pi pi-dollar',
              routerLink: ['/numbers']
            },
            {
              label: 'Uncommons',
              icon: 'pi pi-globe',
              routerLink: ['/uncommon']
            },
        ]
      },
      {
        label: 'Personalized pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Another element',
            icon: 'pi pi-cog'
          }
        ]
      }
  ];

    /* [{
        label: 'File',
        items: [
            {label: 'New', icon: 'pi pi-plus', url: 'https://primeng.org'},
            {label: 'Open', icon: 'pi pi-download', routerLink: ['/menu']},
            {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
        ]
    }]; */
  }
}
