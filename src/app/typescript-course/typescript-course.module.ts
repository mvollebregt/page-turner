import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CourseComponent} from "./course/course.component";
import {PageTurnerModule} from "../page-turner/page-turner.module";
import {TypescriptCourseRoutingModule} from "./typescript-course-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PageTurnerModule,
    TypescriptCourseRoutingModule
  ],
  declarations: [CourseComponent]
})
export class TypescriptCourseModule {
}
