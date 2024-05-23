import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateViewComponent } from './create-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreateViewComponent
  ]
})
export class CreateViewModule { }
