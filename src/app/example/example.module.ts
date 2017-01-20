import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExampleRoutingModule} from "./example-routing.module";
import {ExampleComponent} from "./example/example.component";
import {PageTurnerModule} from "../page-turner/page-turner.module";

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
    PageTurnerModule
  ],
  declarations: [
    ExampleComponent
  ]
})
export class ExampleModule {
}
