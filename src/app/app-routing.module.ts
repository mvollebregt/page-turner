import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";

const routes: Route[] = [
  {path: 'example', loadChildren: 'app/example/example.module#ExampleModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
