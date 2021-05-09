import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  public namePattern :string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }
  
  public noPuedeSerProdrigu75(fc:FormControl):ValidationErrors | null {
      const value = fc.value?.trim().toLowerCase();
  
      if (value === 'prodrigu') {
          return {
              noProdrigu: true
          }
      }
  
      return null;
  }

  equalFields(field1:string, field2:string) {
    return (formGroup:AbstractControl):ValidationErrors | null => {

      const pass = formGroup.get(field1)?.value;
      const confirm = formGroup.get(field2)?.value;

      if (pass !== confirm) {
        formGroup.get(field2)?.setErrors({ equalFields: true });
        //formGroup.get(field2)?.updateValueAndValidity();

        return {
          equalFields: true
        }
      }

      formGroup.get(field2)?.setErrors({ equalFields: null });
      //formGroup.get(field2)?.updateValueAndValidity();
      return null;
    }
  }
}
