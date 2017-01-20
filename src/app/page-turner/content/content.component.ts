import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
const marked = require('marked');

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  html: string;

  constructor(private activatedRoute: ActivatedRoute, private http: Http) {
  }

  ngOnInit() {
    const path = this.activatedRoute.routeConfig.path;
    this.http.get(`assets/${path}.html`).subscribe(response => this.html = response.text());
  }
}
