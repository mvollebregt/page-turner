import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {CompletedGuard} from "../page-turner/completed-guard.service";
import {ContentComponent} from "../page-turner/content/content.component";
import {CourseComponent} from "./course/course.component";
import {TypesComponent} from "./questions/types/types.component";

const classes: Route[] = [
  {path: '1.classes', component: ContentComponent},
  {path: '2.strong_typing', component: ContentComponent},
  {path: '3.types', component: TypesComponent},
  // {path: 'page3', component: ContentComponent, data: {index: 3}},
  // {path: 'page4', component: ContentComponent, data: {index: 4}}
];

const routes: Route[] = [
  {
    path: 'typescript',
    component: CourseComponent,
    children: [{path: '', redirectTo: classes[0].path, pathMatch: 'full'}, ...classes],
    canActivateChild: [CompletedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypescriptCourseRoutingModule {
}
