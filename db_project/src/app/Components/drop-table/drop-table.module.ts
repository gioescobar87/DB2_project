import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropTableComponent } from './drop-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropTableComponent
  ]
})
export class DropTableModule { }
