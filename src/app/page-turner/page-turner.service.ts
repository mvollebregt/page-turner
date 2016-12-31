import {Injectable} from "@angular/core";
import {ActivatedRoute, Router, Route} from "@angular/router";

@Injectable()
export class PageTurnerService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  next(): void {
    let [base, pages, index] = this.pagesAndIndex();
    if (index + 1 < pages.length) {
      this.router.navigate([pages[index + 1].path], {relativeTo: base});
    }
  }

  // Returns a tuple of:
  //
  // - The base route for page turning (e.g. /app/book).
  // - The pages (e.g. page1, page2, page3, page4)
  // - The current page index (e.g. -1 or 3)
  //
  // If the current ActivatedRoute itself contains children, the current ActivatedRoute itself is returned as base
  // route.
  pagesAndIndex(): [ActivatedRoute, Route[], number] {
    // traverse to leaf of currently loaded component tree
    let node: ActivatedRoute = this.activatedRoute;
    while (node.firstChild) {
      node = node.firstChild;
    }
    // does the component have child routes?
    if (node.routeConfig.children) {
      // yes? then we do not have an index
      return [node, node.routeConfig.children, -1];
    } else {
      // no? then we can find the index of the current route in the route config of the direct parent component
      let pages = node.parent.routeConfig.children;
      return [node.parent, pages, pages.findIndex(child => child.path === node.routeConfig.path)];
    }
  }
}
