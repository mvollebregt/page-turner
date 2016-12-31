import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PageComponent} from "./page/page.component";
import {ExampleRoutingModule} from "./example-routing.module";
import {ExampleComponent} from "./example/example.component";

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule
  ],
  declarations: [
    PageComponent,
    ExampleComponent
  ]
})
export class ExampleModule {
}
