import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-truncate-table',
  templateUrl: './truncate-table.component.html',
  styleUrl: './truncate-table.component.scss',
})
export class TruncateTableComponent implements OnInit {
  databaseList: String[] = [];
  tableList: String[] = [];
  databaseName: String = '';
  tableName: String = '';

  constructor(private servicio: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.servicio.getDatabases().subscribe(
      (data: String[]) => {
        this.databaseList = data;
      },
      (error) => {
        alert('No se pudo obtener la lista de bases de datos');
      }
    );
  }

  getTables() {
    this.servicio.getTables(this.databaseName).subscribe(
      (data: string[]) => {
        this.tableList = data;
      },
      (error) => {}
    );
  }

  truncateTable() {
    this.servicio
      .truncateTable('use ' + this.databaseName + ';')
      .subscribe((item) => {});
    this.servicio
      .truncateTable('truncate ' + this.tableName)
      .subscribe((item) => {});
    alert('Success');
    window.location.reload();
  }
}
