import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate{
  constructor(private router: Router, private auth: AuthService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.auth.isAutenticated()){
      return true
    } else{
      this.auth.logout()
      this.router.navigate(['/auth', 'welcome'],{
        queryParams: {pleaseLogin: true}
      })
    }
  }
}
