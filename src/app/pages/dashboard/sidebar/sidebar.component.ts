import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menus: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.menus = [
      {
        text: 'Generals',
        link: './generals',
        open: false,
        subMenus: [
          { text: 'Home', link: '/dashboard/generals' },
          { text: 'Roles', link: '/dashboard/generals/roles' },
          { text: 'Usuarios', link: '/dashboard/generals/users' },
        ],
      },
      {
        text: 'Hotels',
        link: './hotels',
        open: false,
        subMenus: [
          { text: 'Hotel Home', link: '/dashboard/hotels' },
          { text: 'Reports', link: '/dashboard/hotels/reports' },
        ],
      },
      {
        text: 'Inventory',
        link: './inventories',
        open: false,
        subMenus: [
          { text: 'Home', link: '/dashboard/inventories' },
          { text: 'Reports', link: '/dashboard/inventories/reports' },
        ],
      },
      {
        text: 'Restaurants',
        link: './restaurants',
        open: false,
        subMenus: [
          { text: 'Subopción 1', link: './sub1' },
          { text: 'Subopción 2', link: './sub2' },
        ],
      },
      {
        text: 'Rrhh',
        link: './rrhh',
        open: false,
        subMenus: [
          { text: 'Home', link: '/dashboard/rrhh' },
          { text: 'Concepts', link: '/dashboard/rrhh/concepts' },
          { text: 'Staff', link: '/dashboard/rrhh/staff' }
        ],
      },
      {
        text: 'Sales',
        link: './sales',
        open: false,
        subMenus: [
          { text: 'Customers', link: '/dashboard/sales/customers' },
        ],
      },
    ];
  }

  toggle(menu: any) {
    menu.open = !menu.open; // Cambia el estado de abierto/cerrado
  }
}
