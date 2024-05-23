import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../Services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-index',
  templateUrl: './create-index.component.html',
  styleUrl: './create-index.component.scss',
})
export class CreateIndexComponent implements OnInit {
  databaseList: String[] = [];
  tableList: String[] = [];
  attributeList: String[] = [];
  databaseName: String = '';
  tableName: String = '';
  attributeName: String = '';

  constructor(private servicio: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.servicio.getDatabases().subscribe(
      (data: String[]) => {
        this.databaseList = data;
      },
      (error) => {
        alert('No se pudo obtener el listado de base de datos');
      }
    );
  }

  getTables() {
    this.servicio.getTables(this.databaseName).subscribe(
      (data: String[]) => {
        this.tableList = data;
      },
      (error) => {}
    );
  }

  getAttributes() {
    this.servicio.getAttributes(this.databaseName, this.tableName).subscribe(
      (data: String[]) => {
        this.attributeList = data;
      },
      (error) => {}
    );
  }

  createIndex() {
    alert(this.generateSentence());
    this.servicio
      .createIndex('use ' + this.databaseName + ';')
      .subscribe((item) => {});
    this.servicio.createIndex(this.generateSentence()).subscribe((item) => {});
  }

  generateSentence() {
    let sentence = '';
    sentence +=
      'create index idx_' +
      this.attributeName +
      ' on ' +
      this.tableName +
      ' (' +
      this.attributeName +
      '); ';
    return sentence;
  }
}
