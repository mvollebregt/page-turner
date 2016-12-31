import {Injectable} from "@angular/core";
import {ActivatedRoute, Router, ActivatedRouteSnapshot, Route} from "@angular/router";

type AR = ActivatedRoute | ActivatedRouteSnapshot;

@Injectable()
export class PageTurnerService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  next(): void {
    let [base, page] = this.getNext(this.activatedRoute);
    if (page) {
      this.router.navigate([page], {relativeTo: <ActivatedRoute> base});
    }
  }

  getPrevious<T extends AR>(node: AR): [T, string] {
    let [base, pages, index] = this.pagesAndIndex(node);
    return [<T> base, index > 0 ? pages[index - 1].path : undefined];
  }

  getNext<T extends AR>(node: AR): [T, string] {
    let [base, pages, index] = this.pagesAndIndex(node);
    return [<T> base, index + 1 < pages.length ? pages[index + 1].path : undefined];
  }

  // Returns a tuple of:
  //
  // - The base route for page turning (e.g. /app/book).
  // - The pages (e.g. page1, page2, page3, page4)
  // - The current page index (e.g. -1 or 3)
  //
  // If the current ActivatedRoute itself contains children, the current ActivatedRoute itself is returned as base
  // route.
  pagesAndIndex<T extends AR>(node: T): [T, Route[], number] {
    // traverse to leaf of currently loaded component tree
    while (node.firstChild) {
      node = <T> node.firstChild;
    }
    // does the component have child routes?
    if (node.routeConfig.children) {
      // yes? then we do not have an index
      return [node, node.routeConfig.children, -1];
    } else {
      // no? then we can find the index of the current route in the route config of the direct parent component
      let pages = node.parent.routeConfig.children;
      return [<T> node.parent, pages, pages.findIndex(child => child.path === node.routeConfig.path)];
    }
  }
}
