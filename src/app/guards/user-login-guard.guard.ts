import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuardGuard implements CanActivate {

  constructor(private tokenService:TokenService , private router:Router) {
  }

  async canActivate() :Promise<boolean> {
    return await this.tokenService.isTokenAvailable().then(response=>{
      return true;
    }).catch(()=>{
      this.router.navigate(['accounts/login'])
      return false;
    })
  }

}
