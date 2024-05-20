import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTableComponent } from './create-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreateTableComponent
  ]
})
export class CreateTableModule { }
