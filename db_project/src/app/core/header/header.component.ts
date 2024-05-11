import { Component } from '@angular/core';

interface items {
  name: String;
  path: String;
}

interface dropdown {
  name: String;
  items: items[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  options: dropdown[] = [
    {
      name: 'DDL',
      items: [
        {
          name: 'Create Table',
          path: '/create_table',
        },
        {
          name: 'Alter Table',
          path: '/alter_table',
        },
        {
          name: 'Drop Table',
          path: '/drop_table',
        },
        {
          name: 'Truncate Table',
          path: '/truncate_table',
        },
        {
          name: 'Create Index',
          path: '/create_index',
        },
        {
          name: 'Drop Index',
          path: '/drop_index',
        },
        {
          name: 'Create View',
          path: '/create_view',
        },
        {
          name: 'Drop View',
          path: '/drop_view',
        }
      ],
    },
    {
      name: 'DML',
      items: [
        {
          name: 'Select',
          path: '/select',
        },
        {
          name: 'Insert',
          path: '/insert',
        },
        {
          name: 'Update',
          path: '/update',
        },
        {
          name: 'Delete',
          path: '/delete',
        }
      ],
    },
    {
      name: 'DCL',
      items: [
        {
          name: 'Grant',
          path: '/grant',
        },
        {
          name: 'Revoke',
          path: '/revoke',
        }
      ],
    },
    {
      name: 'TCL',
      items: [
        {
          name: 'Transacciones',
          path: '/transacciones',
        }
      ],
    }
  ];

    /*'Start',
    'Commit',
    'Rollback',
    'Savepoint'*/

}
