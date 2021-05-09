import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  myForm:FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern(this.vs.namePattern) ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.vs.emailPattern) ], [ this.emailValidator ] ],
    username: [ '', [ Validators.required, this.vs.noPuedeSerProdrigu75 ] ],
    password: [ '', [ Validators.required, Validators.minLength(4) ] ],
    confirm: [ '', [ Validators.required, Validators.minLength(4) ] ]
  }, {
    validators: [ this.vs.equalFields('password', 'confirm') ]
  });

  constructor(private fb:FormBuilder,
    private vs:ValidatorsService,
    private emailValidator:EmailValidatorService ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Pablo Rodriguez',
      email: 'prodrigu75@gmail.com',
      username: 'prodrigu75',
      password: '123456',
      confirm: '123456'
    });
  }

  get emailErrorMsg():string {
    const errors = this.myForm.get('email')?.errors;

    if (errors?.required)
      return 'El campo email es requerido';
    
    if (errors?.pattern)
      return 'Debe ser un email válido';

    if (errors?.emailExists)
      return 'Este email ya se encuentra asociado a un usuario';

    return 'No implementada';
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
