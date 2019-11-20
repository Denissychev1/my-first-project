import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from './models/login';


@Injectable({providedIn: 'root'})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  constructor(private http: HttpClient) {
  }
  login(value: any) {
    this.http.post<Login>('/api/qwe', {value}).subscribe();
    if (this.http.get('api/qwe') === null) {


      return this.isLoggedIn;
    }
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
