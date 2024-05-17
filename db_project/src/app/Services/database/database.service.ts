import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '../../Entities/Database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8081";

  createDatabase(sentence:String){
    return this.http.post<Database>(this.url+"/create-database",sentence);
  }
}
