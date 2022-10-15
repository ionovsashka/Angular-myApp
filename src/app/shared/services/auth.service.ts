import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  get token(): string{
    const expDate = new Date(localStorage.getItem('fb-token-time'))
    if(new Date() > expDate){
      return null
    }
    return localStorage.getItem('fb-token')
  }


  getUsers(){
    return this.http.get('https://findteam-808e2-default-rtdb.firebaseio.com/users.json')
      .pipe(map((response:{[key: string]: any}) => {
        return response;
      }))
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/auth'])
  }

  isAutenticated(): boolean{
    return !!this.token
  }

}
