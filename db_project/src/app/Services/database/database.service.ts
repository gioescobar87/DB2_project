import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '../../Entities/Database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8081";

  createDatabase(sentence:String){
    return this.http.post<Database>(this.url+"/create-database",sentence);
  }

  deleteDatabase(sentence:String){
    return this.http.post<Database>(this.url+"/delete-database",sentence);
  }

  createTable(sentence:String){
    this.http.post<Database>(this.url+"/create-table",sentence);
    return this.http.post<Database>(this.url+"/create-table",sentence);
  }

  getDatabases(): Observable<string[]> {
    return this.http.get<string[]>(this.url+"/list-database");
  }

  getTables(databaseName:String): Observable<string[]> {
    return this.http.get<string[]>(this.url+"/list-tables/"+databaseName);
  }

  dropTable(sentence:String){
    this.http.post<Database>(this.url+"/drop-table",sentence);
    return this.http.post<Database>(this.url+"/drop-table",sentence);
  }
}
