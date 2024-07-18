import { Component, ViewChild } from '@angular/core';
import { RoleInterface } from '../../../../core/interfaces/role.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RoleService } from '../../../../core/services/role.service';
import { FormRolesComponent } from '../form-roles/form-roles.component';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrl: './list-roles.component.css',
})
export class ListRolesComponent {
  loading: boolean = false;
  roles: RoleInterface[] = [];
  displayedColumns: string[] = [
    'name',

  ];
  dataSource = new MatTableDataSource(this.roles);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private rolesService: RoleService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getAll() {
    this.loading = true;
    this.rolesService.getAll().subscribe(
      (res:any) => {
        this.loading = false;
        this.dataSource = new MatTableDataSource(res.data.roles);
      },
      (err:any) => {
        this.loading = false;
      }
    );
  }
  eliminar(element: RoleInterface, i: number) {
    this.rolesService.delete(element.id).subscribe(
      (data: any) => {
        let roles = this.dataSource.data;
        roles.splice(i, 1);
        this.dataSource.data = roles;
        //this.getAll();
        this.snackBar.open('Role eliminado exitosamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      (err: any) => {
        if (err.status == 422) {
          this.snackBar.open(err.error.error, '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        }
      }
    );
  }

  async getOne(element: RoleInterface) {
    element.action = 'ver';
    const addedData = await this.dialog
      .open(FormRolesComponent, {
        width: '600px',
        height: '500px',
        disableClose: true,
        data: element,
      })
      .afterClosed()
      .toPromise();

    /*if (!addedData) return;

    this.dataSource.data = [addedData, ...this.dataSource.data];*/
    //this.ui.showSnackNotification({ messageId: "NOTIFICATIONS.ADDED" });
  }
  async add() {
    let role: Partial<RoleInterface> = {};
    const addedData = await this.dialog
      .open(FormRolesComponent, {
        width: '600px',
        height: '500px',
        disableClose: true,
        data: role,
      })
      .afterClosed()
      .toPromise();

    if (!addedData) return;

    this.dataSource.data = [addedData, ...this.dataSource.data];
    //this.ui.showSnackNotification({ messageId: "NOTIFICATIONS.ADDED" });
  }

  async edit(role: RoleInterface) {
    role.action = 'editar';
    const updatedData = await this.dialog
      .open(FormRolesComponent, {
        width: '600px',
        height: '500px',
        disableClose: true,
        data: role,
      })
      .afterClosed()
      .toPromise();

    if (!updatedData) return;
    const list = this.dataSource.data;
    const itemIndex = list.findIndex((i) => i.id === role.id);
    list[itemIndex] = updatedData;
    this.dataSource.data = list;
  }
}
