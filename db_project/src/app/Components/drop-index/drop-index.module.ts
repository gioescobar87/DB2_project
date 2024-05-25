import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropIndexComponent } from './drop-index.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropIndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropIndexComponent
  ]
})
export class DropIndexModule { }
