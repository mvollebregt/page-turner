import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title: string;
  sections: string[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.title = data['title'];
      this.sections = data['sections'];
    });
  }
}
