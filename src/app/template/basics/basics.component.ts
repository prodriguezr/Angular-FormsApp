import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  @ViewChild('myForm') myForm!:NgForm;

  initForm = {
    name: 'Producto',
    price: 1000,
    stock: 10,
  }

  save():void {
    console.log(this.myForm.value);
    this.myForm.resetForm(this.initForm);
    console.log(this.myForm.value);
  } 

  nameValid():boolean {
    return this.myForm?.controls.name?.invalid 
      && this.myForm?.controls.name?.touched
  }
  
  priceValid():boolean {
    return this.myForm?.controls.price?.touched
      && this.myForm?.controls.price?.value < 0;
  }
}
