import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  get token(): string{
    const expDate = new Date(localStorage.getItem('fb-token-time'))
    if(new Date() > expDate){
      // this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }


  getUsers(){
    return this.http.get('https://findteam-808e2-default-rtdb.firebaseio.com/users.json')
      .pipe(map((response:{[key: string]: any}) => {
        return (Object.values(response));
      }))
  }

  logout(){
    localStorage.clear()
  }

  isAutenticated(): boolean{
    return !!this.token
  }

}