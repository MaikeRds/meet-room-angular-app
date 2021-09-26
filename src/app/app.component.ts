import { Component } from '@angular/core';
import { MenuItem, PrimeIcons, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[] = [];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;

      this.items = [
        {
            label: 'Add',
            icon: PrimeIcons.PLUS,
            routerLink: 'add'
        },
        {
          label: 'List',
          icon: PrimeIcons.LIST,
          routerLink: 'rooms',
          routerLinkActiveOptions: true
      }
    ];
  }


  title = 'meet-room-angular-app';
}
