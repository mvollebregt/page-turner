import {Injectable} from "@angular/core";
import {CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {PageTurnerService} from "./page-turner.service";

@Injectable()
export class CompletedGuard implements CanActivateChild {

  completed = new Set<string>();

  constructor(private pageTurner: PageTurnerService) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let page = this.pageTurner.getPrevious(route)[1];
    let allowed = !page || this.completed.has(page);
    if (allowed) {
      this.completed.add(route.routeConfig.path);
    }
    return !page || this.completed.has(page);
  }
}
