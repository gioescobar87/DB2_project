import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropViewComponent } from './drop-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropViewComponent
  ]
})
export class DropViewModule { }
