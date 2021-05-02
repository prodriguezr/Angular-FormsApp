import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [
        { 
            provide: NG_VALIDATORS,
            useExisting: CustomMinDirective,
            multi: true,
        }
    ]
})
export class CustomMinDirective implements Validator {
    @Input() min!:number;

    constructor() {
    }

    validate(formControl:FormControl):ValidationErrors|null {
        const inputValue = formControl.value;

        return inputValue < this.min ? { 'customMin': true } : null;
    }
}