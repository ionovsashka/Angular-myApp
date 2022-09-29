import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from 'firebase/auth';
import { map, Observable } from 'rxjs';
import { FbCreateResponse, User } from 'src/app/auth/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(user: UserProfile):Observable<UserProfile>{
    return this.http.post(`https://findteam-808e2-default-rtdb.firebaseio.com/users.json`, user)
      .pipe(
        map((response: FbCreateResponse) => {
          const newUser: UserProfile = {
            ...user,
            id: response.name
          }
          return newUser
        })
      )
  }
}
