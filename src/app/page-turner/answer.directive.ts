import {Directive, Input} from "@angular/core";
import {Validator, AbstractControl, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[answer]',
  providers: [{provide: NG_VALIDATORS, useExisting: AnswerDirective, multi: true}]
})
export class AnswerDirective implements Validator {

  @Input() answer: boolean;

  validate(control: AbstractControl): {[key: string]: any} {
    return control.value != this.answer ? {'answer': true} : null;
  }
}
