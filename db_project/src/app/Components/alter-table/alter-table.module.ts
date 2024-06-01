import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlterTableComponent } from './alter-table.component';

@NgModule({
  declarations: [AlterTableComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AlterTableComponent]
})
export class AlterTableModule { }
