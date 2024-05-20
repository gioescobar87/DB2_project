import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../Services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-table',
  templateUrl: './drop-table.component.html',
  styleUrl: './drop-table.component.scss',
})
export class DropTableComponent implements OnInit {
  databaseList: String[] = [];
  tableList: String[] = [];
  databaseName: String = '';
  tableName: String = '';

  constructor(private servicio: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.servicio.getDatabases().subscribe(
      (data: string[]) => {
        this.databaseList = data;
      },
      (error) => {
        alert('No se pudo obtener la lista de bases de datos');
      }
    );
  }

  getTables() {
    //alert(this.databaseName)
    this.servicio.getTables(this.databaseName).subscribe(
      (data: string[]) => {
        this.tableList = data;
      },
      (error) => {}
    );
  }

  dropTable() {
    this.servicio
      .dropTable('use ' + this.databaseName + ';')
      .subscribe((item) => {});
    this.servicio
      .dropTable('drop table ' + this.tableName)
      .subscribe((item) => {});
    alert('Table was droped successfully');
    window.location.reload();
  }
}
