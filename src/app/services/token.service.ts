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
    localStorage.setItem('BigDealsLK' , JSON.stringify(data));
  }

  public sessionIsExists():boolean{
    return localStorage.getItem('BigDealsLK')?true:false;
  }

  public async isTokenAvailable():Promise<boolean>{
    return await new Promise((resolve, reject) => {
      if(this.sessionIsExists()){
        resolve(true);
      }else{
        reject(false);
      }
    })
  }

  public getToken(){
    let token=localStorage.getItem('BigDealsLK');
    if(token){
      return JSON.parse(token);
    }
    return '';
  }
}
