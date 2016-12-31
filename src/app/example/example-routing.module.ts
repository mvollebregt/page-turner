import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {PageComponent} from "./page/page.component";
import {ExampleComponent} from "./example/example.component";

const pages: Route[] = [
  {path: 'page1', component: PageComponent, data: {index: 1}},
  {path: 'page2', component: PageComponent, data: {index: 2}},
  {path: 'page3', component: PageComponent, data: {index: 3}},
  {path: 'page4', component: PageComponent, data: {index: 4}}
];

const routes: Route[] = [{path: '', component: ExampleComponent, children: pages}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {
}
