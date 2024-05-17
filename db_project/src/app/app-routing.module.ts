import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTableComponent } from './Components/create-table/create-table.component';
import { AlterTableComponent } from './Components/alter-table/alter-table.component';
import { DropTableComponent } from './Components/drop-table/drop-table.component';
import { DatabaseComponent } from './Components/database/database.component';

const routes: Routes = [
  { path: 'create_table', component: CreateTableComponent },
  { path: 'alter_table', component: AlterTableComponent },
  { path: 'drop_table', component: DropTableComponent },
  { path: 'database', component: DatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
