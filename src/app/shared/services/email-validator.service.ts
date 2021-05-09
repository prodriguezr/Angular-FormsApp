import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private httpClient:HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const emailValue = control.value.trim().toLowerCase();

    console.log(emailValue);
    return this.httpClient.get<any[]>(`http://localhost:3000/usuarios?q=${emailValue}`)
      .pipe(
        map(resp => {
          return resp.length === 0 ? null : { emailExists: true }
        })
      );
  }

}
