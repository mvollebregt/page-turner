import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {ExampleModule} from "./example/example.module";
import {TypescriptCourseModule} from "./typescript-course/typescript-course.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ExampleModule,
    TypescriptCourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
