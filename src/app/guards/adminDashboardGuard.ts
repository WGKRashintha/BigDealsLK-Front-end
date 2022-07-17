import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {TokenService} from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardGuard implements CanActivate {

  constructor(private tokenService:TokenService , private router:Router) {
  }

  async canActivate() :Promise<boolean> {
    return await this.tokenService.isTokenAvailable().then(response=>{
      return true;
    }).catch(()=>{
      this.router.navigate(['admin'])
      return false;
    })
  }

}
