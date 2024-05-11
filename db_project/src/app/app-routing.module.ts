import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTableComponent } from './create-table/create-table.component';
import { AlterTableComponent } from './alter-table/alter-table.component';
import { DropTableComponent } from './drop-table/drop-table.component';

const routes: Routes = [
  { path: 'create_table', component: CreateTableComponent },
  { path: 'alter_table', component: AlterTableComponent },
  { path: 'drop_table', component: DropTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
