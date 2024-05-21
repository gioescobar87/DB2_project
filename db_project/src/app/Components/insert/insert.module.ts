import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertComponent } from './insert.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InsertComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InsertComponent
  ]
})
export class InsertModule { }
