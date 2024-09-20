import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConceptsInterface } from '../../../../../core/interfaces/concept.interface';
import { ConceptService } from '../../../../../core/services/concept.service';
import { FormConceptComponent } from '../form-concept/form-concept.component';

@Component({
  selector: 'app-list-concept',
  templateUrl: './list-concept.component.html',
  styleUrls: ['./list-concept.component.css'] // Asegúrate de que este archivo exista
})
export class ListConceptComponent implements OnInit, AfterViewInit {
  loading: boolean = false;
  displayedColumns: string[] = ['namedeductions', 'tipeconcept', 'acciones'];
  dataSource = new MatTableDataSource<ConceptsInterface>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private conceptService: ConceptService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAll() {
    this.loading = true;
    this.conceptService.getAll().subscribe(
      (res: any) => {
        this.loading = false;
        if (res.data && res.data.concepts) {
          this.dataSource.data = res.data.concepts; // Asigna los conceptos a la fuente de datos
        } else {
          this.snackBar.open('No se encontraron conceptos', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        }
      },
      (err: any) => {
        this.loading = false;
        console.error('Error al cargar los conceptos', err);
        this.snackBar.open('Error al cargar los conceptos', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    );
  }

  eliminar(element: ConceptsInterface, i: number) {
    this.conceptService.delete(element.idconcepts).subscribe(
      () => {
        const concepts = this.dataSource.data.filter((_, index) => index !== i); // Filtra el concepto eliminado
        this.dataSource.data = concepts; // Actualiza la fuente de datos
        this.snackBar.open('Concepto eliminado exitosamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      (err: any) => {
        console.error('Error al eliminar el concepto', err);
        if (err.status === 422) {
          this.snackBar.open(err.error.error, '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        }
      }
    );
  }

  async getOne(element: ConceptsInterface) {
    element.action = 'ver'; // Establece la acción para ver el concepto
    const addedData = await this.dialog
      .open(FormConceptComponent, {
        width: '600px',
        height: '500px',
        disableClose: true,
        data: element,
      })
      .afterClosed()
      .toPromise();

    // Aquí puedes manejar el resultado si es necesario
  }

  async add() {
    const newConcept: Partial<ConceptsInterface> = {}; // Inicializa un nuevo concepto vacío
    const addedData = await this.dialog
      .open(FormConceptComponent, {
        width: '600px',
        height: '500px',
        disableClose: true,
        data: newConcept,
      })
      .afterClosed()
      .toPromise();

    if (!addedData) return;

    this.dataSource.data = [addedData, ...this.dataSource.data]; // Agrega el nuevo concepto a la lista
    this.snackBar.open('Concepto agregado exitosamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  async edit(concept: ConceptsInterface) {
    concept.action = 'editar'; // Establece la acción para editar el concepto
    const updatedData = await this.dialog
      .open(FormConceptComponent, {
        width: '600px',
        height: '500px',
        disableClose: true,
        data: concept,
      })
      .afterClosed()
      .toPromise();

    if (!updatedData) return;

    const list = this.dataSource.data;
    const itemIndex = list.findIndex((i) => i.idconcepts === updatedData.idconcepts);

    if (itemIndex !== -1) {
      list[itemIndex] = updatedData; // Actualiza el concepto en la lista
      this.dataSource.data = [...list]; // Asigna la lista actualizada a la fuente de datos
      this.snackBar.open('Concepto actualizado exitosamente', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
}
