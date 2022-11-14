import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CraneAddComponent } from "../components/tableView/crane-add/crane-add.component";

@Injectable()
export class ConfirmExitGuard implements CanDeactivate<CraneAddComponent> {
  canDeactivate(component: CraneAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {

    return component.confirmExit();

  }

}
