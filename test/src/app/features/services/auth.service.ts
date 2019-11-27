import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login';



@Injectable({providedIn: 'root'})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  constructor(private http: HttpClient) {
  }

  login(value: any) {
   return this.http.post<Login>('/api/qwe', {value});
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
