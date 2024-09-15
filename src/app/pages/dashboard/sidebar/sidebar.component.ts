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
          { text: 'Concepts', link: '/dashboard/rrhh/concepts' },
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
      {
        text: 'Purchases',
        link: './purchases',
        open: false,
        subMenus: [
          { text: 'Orders', link: '/dashboard/purchases/orders' },
          { text: 'Suppliers', link: '/dashboard/purchases/suppliers' },
          { text: 'Suppliers Services', link: '/dashboard/purchases/suppliers_services' }
        ],
      },
    ];
  }

  toggle(menu: any) {
    menu.open = !menu.open; // Cambia el estado de abierto/cerrado
  }
}
