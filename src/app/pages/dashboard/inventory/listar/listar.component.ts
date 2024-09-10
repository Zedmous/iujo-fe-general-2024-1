import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



export interface PeriodicElement {
  position: string;
  name: string;  
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1', name: 'Harina', weight: 'alimentos', symbol: '20'},
  {position: '2', name: 'Arroz', weight: 'alimentos', symbol: '10'},
  {position: '3', name: 'Pasta', weight: 'alimentos', symbol: '15'},
  {position: '4', name: 'Jabon', weight:' Higiene', symbol: '6'},
  {position: '5', name: 'Shampoo', weight: 'Higiene', symbol: '8'},
  {position: '6', name: 'Sabanas', weight: 'Ropa de cama', symbol: '20'},
  {position: '7', name: 'Toallas', weight: 'Toallas de baño', symbol: '17'},
  {position: '8', name: 'Malta', weight: 'Bebidas', symbol: '9'},
  {position: '9', name: 'Refrescos', weight: 'Bebidas', symbol: '50'},
  {position: '10', name: 'Jugos', weight: 'Bebidas', symbol: '40'},
];

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
  standalone: true, 
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})

export class ListarComponent {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

/** Builds and returns a new User. */
function createNewUser(position: number): PeriodicElement {
  const PeriodicElement =
  ELEMENT_DATA[Math.round(Math.random() * (ELEMENT_DATA.length - 1))] +
    ' ' +
    ELEMENT_DATA[Math.round(Math.random() * (ELEMENT_DATA.length - 1))];

  return {
    position: position.toString(),
    name: PeriodicElement,
    weight: Math.round(Math.random() * 100).toString(),
    symbol: Math.round(Math.random() *  100).toString()
  };
}
 /* applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}*/

