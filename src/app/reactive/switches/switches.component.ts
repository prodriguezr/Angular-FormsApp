import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

enum Gender {
  F, M
}

interface Person {
  gender: string,
  notify: boolean,
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  myForm:FormGroup = this.formBuilder.group({
    gender: [ 'M', Validators.required ],
    notify: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  });

  person:Person = {
    gender: 'F',
    notify: true,
  }

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person, 
      termsAndConditions: false 
    });

    this.myForm.valueChanges.subscribe(({ termsAndConditions, ...rest }) => {
      //delete myForm.termsAndConditions;
      this.person = rest;
    });

    this.myForm.get('termsAndConditions')?.valueChanges.subscribe(newValue => {
      console.log(newValue);
    });
  }

  save():void {
    const formValue = { ...this.myForm.value };
    delete formValue.termsAndConditions;

    this.person = formValue;

    console.log(formValue);
  }
}
