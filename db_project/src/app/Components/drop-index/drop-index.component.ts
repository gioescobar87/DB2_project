import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../Services/database/database.service';

@Component({
  selector: 'app-drop-index',
  templateUrl: './drop-index.component.html',
  styleUrl: './drop-index.component.scss',
})
export class DropIndexComponent implements OnInit {
  databaseList: String[] = [];
  tableList: String[] = [];
  indexList: String[] = [];
  databaseName: String = '';
  tableName: String = '';
  indexName: String = '';

  constructor(private servicio: DatabaseService) {}

  ngOnInit(): void {
    this.servicio.getDatabases().subscribe((data: String[]) => {
      this.databaseList = data;
    });
  }

  getTables() {
    this.servicio.getTables(this.databaseName).subscribe((data: String[]) => {
      this.tableList = data;
    });
  }

  getIndexes() {
    this.servicio
      .getIndexes(this.databaseName, this.tableName)
      .subscribe((data: String[]) => {
        this.indexList = data;
      });
  }

  dropIndex() {
    this.servicio
      .dropIndex('use ' + this.databaseName + ';')
      .subscribe((item) => {});
    this.servicio
      .dropIndex('drop index ' + this.indexName + ' on ' + this.tableName + ';')
      .subscribe((item) => {});
  }
}
