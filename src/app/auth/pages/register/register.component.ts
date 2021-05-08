import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  myForm:FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern(this.vs.namePattern) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.vs.emailPattern) ] ],
    username: [ '', [ Validators.required, this.vs.noPuedeSerProdrigu75 ] ],
    password: [ '', [ Validators.required, Validators.minLength(4) ] ],
    confirm: [ '', [ Validators.required, Validators.minLength(4) ] ]
  }, {
    validators: [ this.vs.equalFields('password', 'confirm') ]
  });

  constructor(private fb:FormBuilder,
    private vs:ValidatorsService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Pablo Rodriguez',
      email: 'prodrigu75@gmail.com',
      username: 'prodrigu75'
    });
  }

  showInvalidField(field:string): boolean|undefined {
    return this.myForm.get(field)?.invalid
      && this.myForm.get(field)?.touched;
  }

  create() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }
}
