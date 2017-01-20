import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent {

  markAsPristine(form: NgForm): void {
    for (let control in form.controls) {
      form.controls[control].markAsPristine();
    }
  }

  isInvalid(form: NgForm, key: string): boolean {
    let field = form.controls[key];
    return form.submitted && (field.invalid || field.dirty);
  }
}
