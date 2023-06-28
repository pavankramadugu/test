import {Component} from '@angular/core';
import {ColDef} from 'ag-grid-community';
import { GridReadyEvent } from 'ag-grid-community';
import {ActionButtonCellRenderer} from "./action-button-cell/action-button-cell.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  columnDefs: ColDef[] = [
    {
      headerName: 'First Name', field: 'firstName', sortable: true, filter: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: 'Last Name', field: 'lastName', sortable: true, filter: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: 'Job Title', field: 'jobTitle', sortable: true, filter: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: 'Job Type', field: 'jobType', sortable: true, filter: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: 'Current Project', field: 'currentProject', sortable: true, filter: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: 'Team Lead Experience', field: 'teamLeadExp', sortable: true, filter: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: 'Employee Email', field: 'email', sortable: true, filter: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: ActionButtonCellRenderer,
      resizable: true,
    }
  ];

  rowData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Software Engineer',
      jobType: 'Full-Time',
      currentProject: 'Project Alpha',
      teamLeadExp: '2 years',
      email: 'johndoe@example.com'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      jobTitle: 'Product Manager',
      jobType: 'Part-Time',
      currentProject: 'Project Beta',
      teamLeadExp: '5 years',
      email: 'janesmith@example.com'
    },
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      jobTitle: 'Data Analyst',
      jobType: 'Contract',
      currentProject: 'Project Gamma',
      teamLeadExp: '1 year',
      email: 'bob.johnson@example.com'
    },
    {
      firstName: 'Alice',
      lastName: 'Williams',
      jobTitle: 'UX Designer',
      jobType: 'Full-Time',
      currentProject: 'Project Delta',
      teamLeadExp: '3 years',
      email: 'alice.williams@example.com'
    },
    {
      firstName: 'Charlie',
      lastName: 'Brown',
      jobTitle: 'Web Developer',
      jobType: 'Part-Time',
      currentProject: 'Project Epsilon',
      teamLeadExp: '4 years',
      email: 'charlie.brown@example.com'
    },
    {
      firstName: 'Emily',
      lastName: 'Davis',
      jobTitle: 'QA Tester',
      jobType: 'Contract',
      currentProject: 'Project Zeta',
      teamLeadExp: '2 years',
      email: 'emily.davis@example.com'
    },
    {
      firstName: 'George',
      lastName: 'Miller',
      jobTitle: 'Systems Analyst',
      jobType: 'Full-Time',
      currentProject: 'Project Eta',
      teamLeadExp: '5 years',
      email: 'george.miller@example.com'
    },
    {
      firstName: 'Ivy',
      lastName: 'Anderson',
      jobTitle: 'Business Analyst',
      jobType: 'Part-Time',
      currentProject: 'Project Theta',
      teamLeadExp: '1 year',
      email: 'ivy.anderson@example.com'
    }
  ];

  onActionButtonClicked(data: any, action: string) {
    console.log(`Action: ${action} - Data:`, data);
    // Handle the action here...
  }

  get context() {
    return { componentParent: this };
  }

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }
}
