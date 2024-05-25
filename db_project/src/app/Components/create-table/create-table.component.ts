import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../Services/database/database.service';
import { Router } from '@angular/router';

interface attribute {
  attribute: String;
  name: String | null;
  type: String | null;
  size: number | null;
}

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrl: './create-table.component.scss',
})
export class CreateTableComponent implements OnInit {
  databaseList: String[] = [];
  databaseName: String = '';
  fieldsNumber: number = 0;
  dataType: String[] = ['number', 'varchar'];

  primaryKey: String = '';
  tableName: String = '';

  attributeList: attribute[] = [];
  sentence: String = '';

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

  enableFields(quantity: number) {
    this.attributeList = [];
    for (let index = 0; index < quantity; index++) {
      this.attributeList.push({
        attribute: 'Attribute ' + (index + 1),
        name: null,
        type: null,
        size: null,
      });
    }
  }

  captureData() {
    this.generateSentence();
    alert(this.sentence);
    this.servicio.createTable('use ' + this.databaseName + ';')
      .subscribe((item) => {});
    this.servicio.createDatabase(this.sentence).subscribe((item) => {});
  }

  generateSentence() {
    this.primaryKey = 'id_' + this.tableName;
    this.sentence = '';
    this.sentence +=
      'create table ' +
      this.tableName +
      '(' +
      this.primaryKey +
      ' INT AUTO_INCREMENT PRIMARY KEY,';
    for (let i = 0; i < this.attributeList.length; i++) {
      this.sentence +=
        this.attributeList[i].name +
        ' ' +
        this.attributeList[i].type +
        '(' +
        this.attributeList[i].size;
      this.sentence += this.attributeList.length - i > 1 ? '),' : ')';
    }
    this.sentence += '); ';
  }
}
