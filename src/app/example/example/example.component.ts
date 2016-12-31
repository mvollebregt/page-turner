import {Component} from "@angular/core";
import {PageTurnerService} from "../../page-turner/page-turner.service";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  constructor(public pageTurner: PageTurnerService) {
  }

}
