import {NgModule} from "@angular/core";
import {PageTurnerService} from "./page-turner.service";
import {CompletedGuard} from "./completed-guard.service";

@NgModule({
  providers: [
    CompletedGuard,
    PageTurnerService
  ]
})
export class PageTurnerModule {
}
