import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  dropdownDDL : String[] = [
    'Create Table',
    'Alter Table',
    'Drop Table',
    'Truncate Table',
    'Create Index',
    'Drop Index',
    'Create View',
    'Drop View'
  ]

  dropdownDML : String[] = [
    'Select',
    'Insert',
    'Update',
    'Delete'
  ]

  dropdownDCL : String[] = [
    'Grant',
    'Revoke'
  ]

  dropdownTCL : String[] = [
    'Crear transacción'
    /*'Start',
    'Commit',
    'Rollback',
    'Savepoint'*/
  ]
}
