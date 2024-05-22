import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  salt: string = "";
  errorMessage: string = "";
  users: any[] = [];

  constructor(private servicio: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.error('Error fetching users', error);
    });
  }

  onSubmit(): void {
    let user = this.users.find(u => u.username === this.username && u.password === this.servicio.hashPassword(this.password,this.salt));
    user = this.users.find(u => u.username === this.username && u.password === this.servicio.hashPassword(this.password,this.salt));
    if (user) {
      this.router.navigate(['/create-table']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
    //alert(this.password+" = "+this.servicio.hashPassword(this.password))
  }
}
