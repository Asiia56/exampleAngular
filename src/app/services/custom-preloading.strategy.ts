import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

//preloading strategy helps customise how lazy loaded components will be loaded

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.data["preload"]) {
      return load(); //if route marked as "preload", preload it from dashboard
    }
    else {
      return of(null); //if route is not marked as "preload", ignore this route
    }
  }
}
