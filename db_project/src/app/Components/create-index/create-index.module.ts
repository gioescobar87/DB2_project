import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateIndexComponent } from './create-index.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateIndexComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CreateIndexComponent
  ]
})
export class CreateIndexModule { }
