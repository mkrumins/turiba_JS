import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuardpageGuard implements CanActivate {

  constructor(private router: Router, private auth:AuthService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // state.url - ir ceļš ko klients veic ?
    // return true;
    // console.log(state);

    if (state.url != "/login") {
      // let username = sessionStorage.getItem("username");
      if (!this.auth.isUsernameCorrect()) {
        this.router.navigateByUrl("/login");
        return false; // redirects uz login
      }
      else
        return true; // rādīs HomepageComponent kompanenti
    }
    else
      return true; // rādīs HomepageComponent kompanenti
  }
}
