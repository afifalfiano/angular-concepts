import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  constructor() {

   }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

}

createFormControls(){
  this.myform = new FormGroup({
    name : new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    }),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    language: new FormControl()
  });
}

createForm(){
  this.myform = new FormGroup({
    name: new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    }),
    email: this.email,
    password: this.password,
    language: this.language
  });
}


onSubmitEnter(){
  if(this.myform.valid) {
    console.log('Form Submitted!');
    this.myform.reset();
  }
}
}
