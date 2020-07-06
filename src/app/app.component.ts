import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FileValidator } from './file-input.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-upload-validation';
  fileContent: any;
  
  constructor() {
  }
  // frm = new FormGroup({});
  
  // constructor() {
  //   this.buildForm();
  // }
  
  // private buildForm() {
  //     this.frm = new FormGroup({
  //         file: new FormControl("", [FileValidator.validate])
  //     });
  // }
}
