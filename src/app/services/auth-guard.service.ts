import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("ACTIVATE")
    const check = await this.authService.check().finally();
    if (check) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    await this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
