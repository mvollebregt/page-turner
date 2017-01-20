import {NgModule} from "@angular/core";
import {PageTurnerService} from "./page-turner.service";
import {CompletedGuard} from "./completed-guard.service";
import {ContentComponent} from "./content/content.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {AnswerDirective} from "./answer.directive";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    CompletedGuard,
    PageTurnerService
  ],
  declarations: [
    AnswerDirective,
    ContentComponent
  ],
  exports: [
    AnswerDirective
  ]
})
export class PageTurnerModule {
}
