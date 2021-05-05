import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {
  myForm:FormGroup = this.formBuilder.group({
    personName: [ , [ Validators.required, Validators.minLength(3) ] ],
    favoriteGroups: this.formBuilder.array([
      [ 'Queen' ],
      [ 'Muse' ],
      [ 'Led Zeppelin' ],
    ], Validators.required ),
  });

  newFavGroup:FormControl = this.formBuilder.control( '', Validators.required );

  get FavGroups():FormArray {
    return this.myForm.get('favoriteGroups') as FormArray;
  }

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
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
  }

  addFavGroup() {
    if (this.newFavGroup.invalid)
      return;
    
    this.FavGroups.push(this.formBuilder.control(this.newFavGroup.value, Validators.required));
    
    console.log(this.newFavGroup.value);

    this.newFavGroup.reset();
  }

  removeFavGroup(index:number):void {
    this.FavGroups.removeAt(index);
  }
}
