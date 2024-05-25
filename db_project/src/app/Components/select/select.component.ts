import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../Services/database/database.service';
import { Router } from '@angular/router';

interface attribute{
  position: String
  attribute: String | null
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit {

  databaseList: String[] = []
  tableList: String[] = []
  attributeList: String[] = []
  data: any[] = []
  option: String = ""
  databaseName: string = " ---"
  tableName: String = ""
  numberElements: number = 0
  attributesSelected: attribute[] = []
  columns: string[] = []
  sentence: string = ""

  constructor(private servicio:DatabaseService, private router:Router){}

  ngOnInit(): void {
      this.servicio.getDatabases().subscribe(
        (data: string[]) =>
          this.databaseList = data
      );
  }

  display(select:String){
    this.option = select;
  }

  getTables(event:Event){
    this.servicio.getTables(this.databaseName).subscribe(
      (data: string[]) => {
        this.tableList = data;
      }
    );
  }

  getDropDowns(){
    this.attributesSelected = []
    for (let i = 0; i < this.numberElements; i++) {
      this.attributesSelected.push({
        position: "Attribute "+(i+1),
        attribute: ""
      })
    }
  }

  getAttributes(event:Event){
    this.servicio.getAttributes(this.databaseName,this.tableName)
    .subscribe(
      (data: String[]) => {
        this.attributeList = data;
      }
    );
  }

  processSimple(){
    this.servicio.select(this.databaseName,this.generateSentence()).subscribe(
      response => {
        this.data = response;
        if (this.data.length > 0) {
          this.columns = Object.keys(this.data[0]);
        }
      },
      error => {
        alert("Error pulling data")
      }
    )
  }

  processComplex(){
    this.servicio.select(this.databaseName,this.sentence).subscribe(
      response => {
        this.data = response;
        if (this.data.length > 0) {
          this.columns = Object.keys(this.data[0]);
        }
      }
    )
  }

  generateSentence(){
    let string = ""
    string += "select "
    for (let i = 0; i < this.attributesSelected.length; i++) {
      string += this.attributesSelected[i].attribute
      string += this.attributesSelected.length - i == 1 ? ' ' : ', '
    }
    string += 'from '+this.tableName+';'
    return string;
  }

}
