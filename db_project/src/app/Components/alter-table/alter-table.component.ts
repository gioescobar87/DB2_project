

import { Component } from '@angular/core';
import { DatabaseService } from '../../Services/database/database.service';
import { Router } from '@angular/router';
//import { attribute } from './alter-table.component';

export interface attribute {
  attribute: String;
  name: String | null;
  type: String | null;
  size: number | null;
}

@Component({
  selector: 'app-alter-table',
  templateUrl: './alter-table.component.html',
  styleUrls: ['./alter-table.component.scss']
})
export class AlterTableComponent {
  databaseList: String[] = [];
  action: String = "";
  attribute: String = "";
  tableAction: String[] = [
    "emoving_column",
    "add_column",
    "edit_column"
  ];
  databaseName: String = '';
  fieldsNumber: number = 0;
  tableList: String[] = [];
  dataType: String[] = ['number', 'varchar'];

  primaryKey: String = '';
  tableName: String = '';

  attributeList: attribute[] = [];
  sentence: String = '';

  constructor(private servicio: DatabaseService, private router: Router) { }

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
    this.servicio.getTables(this.databaseName).subscribe(
      (data: string[]) => {
        this.tableList = data;
      },
      (error) => {
        alert('No se pudo obtener la lista de tablas');
      }
    );
  }

  enableFields(quantity: number) {
   console.log(quantity);
   console.log(this.databaseName);
   console.log(this.tableName);
    this.attributeList = [];
    for (let index = 0; index < quantity; index++) {
      this.attributeList.push({
        attribute: 'Attribute ' + (index + 1),
        name: null,
        type: null,
        size: null,
      });
    }
    /*this.servicio
          .dropTable('use ' + this.databaseName + ';')
          .subscribe((item) => {});*/
        this.servicio
          .dropTable('drop table ' + this.tableName)
          .subscribe((item) => {});
        alert('Table was droped successfully');
        //window.location.reload();
      }

  removeTable() {
    if (this.action === 'removing_column') {
        /*this.servicio
          .dropTable('use ' + this.databaseName + ';')
          .subscribe((item) => {});
        this.servicio
          .dropTable('drop table ' + this.tableName)
          .subscribe((item) => {});
        alert('Table was droped successfully');
        window.location.reload();*/
        console.log("")
      this.tableName = ''; 
    }
  }

  captureData() {
    this.generateSentence();
    alert(this.sentence);
    this.servicio.createTable('use ' + this.databaseName + ';')
      .subscribe((item) => { });
    this.servicio.createDatabase(this.sentence).subscribe((item) => { });
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



