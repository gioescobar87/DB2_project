import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-view',
  templateUrl: './drop-view.component.html',
  styleUrl: './drop-view.component.scss'
})
export class DropViewComponent implements OnInit{

  databaseList: String[] = []
  viewList: String[] = []
  databaseName: String = ""
  viewName: String = ""

  constructor(private servicio:DatabaseService, private router:Router){}

  ngOnInit(): void {
      this.servicio.getDatabases().subscribe(
        (data:String[])=>{
          this.databaseList = data;
        }
      )
  }

  getViews(event:Event){
    this.servicio.getViews(this.databaseName).subscribe(
      (data:String[])=>{
        this.viewList = data;
      }
    )
  }

  dropView(){
    this.servicio
      .dropTable('use ' + this.databaseName + ';')
      .subscribe((item) => {});
    this.servicio
      .dropTable('drop view ' + this.viewName)
      .subscribe((item) => {});
    alert('View was droped successfully');
    window.location.reload();
  }
}
