import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CourseComponent} from "./course/course.component";
import {PageTurnerModule} from "../page-turner/page-turner.module";
import {TypescriptCourseRoutingModule} from "./typescript-course-routing.module";
import {TypesComponent} from "./questions/types/types.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageTurnerModule,
    TypescriptCourseRoutingModule
  ],
  declarations: [CourseComponent, TypesComponent]
})
export class TypescriptCourseModule {
}
