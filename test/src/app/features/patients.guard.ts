import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ChoiseComponent} from "./choise/choise.component";

export class PatientsGuard implements CanActivate{


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

    return confirm('Вы Пациент?');
  }
}
