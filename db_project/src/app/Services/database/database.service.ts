import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '../../Entities/Database';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import * as crypto from 'crypto';

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

  insert(sentence:String){
    this.http.post<Database>(this.url+"/insert",sentence);
    return this.http.post<Database>(this.url+"/insert",sentence);
  }

  getDatabases(): Observable<string[]> {
    return this.http.get<string[]>(this.url+"/list-database");
  }

  getTables(databaseName:String): Observable<string[]> {
    return this.http.get<string[]>(this.url+"/list-tables/"+databaseName);
  }

  getAttributes(databaseName:String, tableName:String): Observable<string[]> {
    return this.http.get<string[]>(this.url+"/list-attributes/"+databaseName+"/"+tableName);
  }

  dropTable(sentence:String){
    this.http.post<Database>(this.url+"/drop-table",sentence);
    return this.http.post<Database>(this.url+"/drop-table",sentence);
  }

  truncateTable(sentence:String){
    return this.http.post<Database>(this.url+"/truncate-table",sentence);
  }

  createIndex(sentence:String){
    return this.http.post<Database>(this.url+"/create-index",sentence);
  }

  createView(sentence:String){
    return this.http.post<Database>(this.url+"/create-view",sentence);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.url+"/list-users");
  }

}
