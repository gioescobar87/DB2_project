import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrl: './create-table.component.scss',
})
export class CreateTableComponent implements OnInit{

  textFieldCounter: number = 0;
  addTextFieldBtn: HTMLElement | null = document.getElementById('addTextFieldBtn');

  constructor(){}
  ngOnInit(): void {
    if(this.addTextFieldBtn) {
      this.addTextFieldBtn.addEventListener('click', this.addTextField);
    }
  }


  addTextField(): void {
    const textFieldsContainer: HTMLDivElement | null = document.getElementById(
      'textFieldsContainer'
    ) as HTMLDivElement;

    // Create a new text field
    const textField: HTMLInputElement = document.createElement('input');
    textField.type = 'text';
    textField.className = 'form-control mt-2';
    textField.placeholder = `Text Field ${++this.textFieldCounter}`;

    // Append the new text field to the container
    if (textFieldsContainer) {
      textFieldsContainer.appendChild(textField);
    }
  }

  removeTextField(): void {
    const textFieldsContainer: HTMLDivElement | null = document.getElementById(
      'textFieldsContainer'
    ) as HTMLDivElement;

    // Get the last text field and remove it
    const lastTextField: Node | null = textFieldsContainer?.lastChild;
    if (lastTextField) {
      textFieldsContainer?.removeChild(lastTextField);
      this.textFieldCounter--;
    }
  }

  //Unexpected keyword or identifier Member 'document' implicitly has an 'any' type
  //document.getElementById('addTextFieldBtn')?.addEventListener('click', addTextField());
  //document.getElementById('removeTextFieldBtn')?.addEventListener('click', removeTextField);

  // Define a counter to keep track of the number of text fields



/*

  // Function to add a new text field
  addTextField(): void {
    // Increment the counter
    this.textFieldCounter++;

    // Create a new text field element
    const textField: HTMLInputElement = document.createElement('input');
    textField.type = 'text';
    textField.className = 'form-control mt-2';
    textField.placeholder = `Text Field ${this.textFieldCounter}`;

    // Append the new text field to the textFieldsContainer
    const textFieldsContainer: HTMLElement | null = document.getElementById(
      'textFieldsContainer'
    );
    if (textFieldsContainer) {
      textFieldsContainer.appendChild(textField);
    }
  }

  // Add event listener to the "Add Text Field" button
*/

}
