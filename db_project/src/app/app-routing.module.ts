import { TruncateTableComponent } from './truncate-table/truncate-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTableComponent } from './Components/create-table/create-table.component';
import { AlterTableComponent } from './Components/alter-table/alter-table.component';
import { DropTableComponent } from './Components/drop-table/drop-table.component';
import { DatabaseComponent } from './Components/database/database.component';
import { InsertComponent } from './Components/insert/insert.component';
import { MainComponent } from './main/main.component';
import { CreateViewComponent } from './Components/create-view/create-view.component';
import { CreateIndexComponent } from './Components/create-index/create-index.component';
import { SelectComponent } from './Components/select/select.component';
import { DropViewComponent } from './drop-view/drop-view.component';

const routes: Routes = [
  { path: 'create_table', component: CreateTableComponent },
  { path: 'alter_table', component: AlterTableComponent },
  { path: 'drop_table', component: DropTableComponent },
  { path: 'database', component: DatabaseComponent},
  { path: 'insert', component: InsertComponent},
  { path: 'truncate_table', component: TruncateTableComponent},
  { path: 'create_view' , component: CreateViewComponent},
  { path: 'create_index' , component: CreateIndexComponent},
  { path:'select',component:SelectComponent},
  { path:'drop_view',component:DropViewComponent},
  { path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
