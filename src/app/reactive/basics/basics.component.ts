import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  myForm:FormGroup = this.formBuilder.group({
    name: [ , [Validators.required, Validators.minLength(3)] ],
    price: [ , [ Validators.required, Validators.min(0) ] ],
    stock: [ , [ Validators.required, Validators.min(0) ] ],
  });

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.myForm.reset({
      name: 'Coca-Cola Zero',
      price: 0,
    });
  }

  showError(field:string):boolean {
    return (this.myForm.controls[field].errors === null ? false : true )
      && this.myForm.controls[field].touched; 
  }

  save():void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
