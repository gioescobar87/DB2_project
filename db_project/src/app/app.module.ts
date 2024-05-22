import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CreateTableModule } from './Components/create-table/create-table.module';
import { AlterTableModule } from './Components/alter-table/alter-table.module';
import { DropTableModule } from './Components/drop-table/drop-table.module';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseModule } from './Components/database/database.module';
import { FormsModule } from '@angular/forms';
import { InsertModule } from './Components/insert/insert.module';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CreateTableModule,
    AlterTableModule,
    DatabaseModule,
    DropTableModule,
    InsertModule,
    LoginModule,
    MainModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
