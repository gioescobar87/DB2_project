import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from './database.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatabaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DatabaseComponent
  ]
})
export class DatabaseModule { }
