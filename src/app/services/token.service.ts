import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public removeToken(){
    localStorage.removeItem('BigDealsLK');
  }

  public createToken(data:any){
    this.removeToken();
    localStorage.setItem(' BigDealsLK' , JSON.stringify(data));
  }
}
