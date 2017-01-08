import {NgModule} from "@angular/core";
import {PageTurnerService} from "./page-turner.service";
import {CompletedGuard} from "./completed-guard.service";
import {ContentComponent} from "./content/content.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CompletedGuard,
    PageTurnerService
  ],
  declarations: [ContentComponent]
})
export class PageTurnerModule {
}
