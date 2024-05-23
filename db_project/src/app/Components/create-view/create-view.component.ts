import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../Services/database/database.service';
import { Router } from '@angular/router';

interface attribute {
  position: String;
  attribute: String | null;
}

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrl: './create-view.component.scss',
})
export class CreateViewComponent implements OnInit {
  databaseList: String[] = [];
  tableList: String[] = [];
  attributeList: String[] = [];
  databaseName: String = '';
  tableName: String = '';
  number: number = 0;
  attributes: attribute[] = [];
  viewName: String = '';

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
    this.servicio.getTables(this.databaseName).subscribe(
      (data: string[]) => {
        this.tableList = data;
      },
      (error) => {
        alert('No se pudo obtener la lista de bases de datos');
      }
    );
  }

  getAttributes() {
    this.servicio.getAttributes(this.databaseName, this.tableName).subscribe(
      (data: string[]) => {
        this.attributeList = data;
      },
      (error) => {
        alert('No se pudo obtener la lista de bases de datos');
      }
    );
    this.getDropDowns();
  }

  getDropDowns() {
    for (let i = 0; i < this.number; i++) {
      this.attributes.push({ position: 'Attribute ' + (i + 1), attribute: '' });
    }
  }

  createView() {
    alert(this.generateSentence());
    this.servicio
      .createView('use ' + this.databaseName)
      .subscribe((data) => {});
    this.servicio.createView(this.generateSentence()).subscribe((data) => {});
  }

  generateSentence() {
    let string = '';
    string += 'create view ' + this.viewName + ' as select ';
    for (let i = 0; i < this.attributes.length; i++) {
      string += this.attributes[i].attribute;
      string += this.attributes.length - i == 1 ? ' ' : ', ';
    }
    string += 'from ' + this.tableName + '; ';
    return string;
  }
}
