import { Component } from '@angular/core';
import { DatabaseService } from '../../Services/database/database.service';
import { Router } from '@angular/router';
import { Database } from '../../Entities/Database';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrl: './database.component.scss'
})
export class DatabaseComponent {

  constructor(private servicio:DatabaseService,private router:Router){}

  disp: String = "";

  display(selection: String){
    this.disp = selection;
  }

  database=new Database();

  name="";

  ngOnInit():void{}

  createDatabase(sentence:String){
    if (typeof(sentence)!="undefined") {
      this.servicio.createDatabase("create database "+sentence+";").subscribe(item=>{
        alert("Base de datos creada");
      })
    } else {
      alert("Por favor verifique los datos ingresados");
    }
  }

  deleteDatabase(sentence:String){
    if (typeof(sentence)!="undefined") {
      this.servicio.deleteDatabase("drop database "+sentence+";").subscribe(item=>{
        alert("Base de datos eliminada");
        //this.router.navigate(["listar-alumno"]);
      })
    } else {
      alert("Por favor verifique los datos ingresados");
    }
  }

  cancel(){
    //this.router.navigate(["listar-alumno"]);
  }

}
