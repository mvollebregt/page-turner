import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {CompletedGuard} from "../page-turner/completed-guard.service";
import {ContentComponent} from "../page-turner/content/content.component";
import {CourseComponent} from "./course/course.component";

const pages: Route[] = [
  {path: 'page1', component: ContentComponent, data: {index: 1}},
  {path: 'page2', component: ContentComponent, data: {index: 2}},
  {path: 'page3', component: ContentComponent, data: {index: 3}},
  {path: 'page4', component: ContentComponent, data: {index: 4}}
];

const routes: Route[] = [
  {
    path: 'typescript',
    component: CourseComponent,
    children: [{path: '', redirectTo: pages[0].path, pathMatch: 'full'}, ...pages],
    canActivateChild: [CompletedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypescriptCourseRoutingModule {
}
