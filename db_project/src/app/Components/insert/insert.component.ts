import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../Services/database/database.service';
import { Router } from '@angular/router';

interface attribute {
  attribute: String;
  value: String | null;
}

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.scss',
})
export class InsertComponent implements OnInit {
  databaseList: String[] = [];
  tableList: String[] = [];
  attributesList: String[] = [];
  attributeList: attribute[] = [];
  databaseName: String = '';
  fieldsNumber: number = 0;
  dataType: String[] = ['number', 'varchar'];

  primaryKey: String = '';

  tableName: String = '';

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

  getTables() {
    //alert(this.databaseName)
    this.servicio.getTables(this.databaseName).subscribe(
      (data: string[]) => {
        this.tableList = data;
      },
      (error) => {}
    );
  }

  getAttributes(database: String, table: String) {
    //alert(database+" | "+table);
    //alert(this.databaseName+" | "+this.tableName);
    this.servicio.getAttributes(database, table).subscribe(
      (data: string[]) => {
        this.attributesList = data;
      },
      (error) => {}
    );
    this.updateInputs();
  }

  updateInputs() {
    this.attributeList = [];
    for (let i = 0; i < this.attributesList.length; i++) {
      if (i != 0) {
        this.attributeList.push({
          attribute: this.attributesList[i],
          value: null,
        });
      }
    }
  }

  captureData() {
    this.generateSentence();
    this.servicio
      .insert('use ' + this.databaseName + ';')
      .subscribe((item) => {});
    this.servicio.insert(this.sentence).subscribe((item) => {});
  }

  generateSentence() {
    this.sentence = '';
    this.sentence += 'insert into ' + this.tableName + ' (';
    for (let i = 0; i < this.attributeList.length; i++) {
      this.sentence += ' ' + this.attributeList[i].attribute;
      this.sentence += this.attributeList.length - i > 1 ? ',' : ') values (';
    }
    for (let i = 0; i < this.attributeList.length; i++) {
      this.sentence += " '" + this.attributeList[i].value;
      this.sentence += this.attributeList.length - i > 1 ? "'," : "' );";
    }
    alert(this.sentence);
  }
}
