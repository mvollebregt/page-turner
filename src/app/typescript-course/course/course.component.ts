import {Component} from "@angular/core";
import {PageTurnerService} from "../../page-turner/page-turner.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  constructor(public pageTurner: PageTurnerService) {
  }

}
