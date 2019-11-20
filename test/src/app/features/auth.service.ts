import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from './models/login';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthService {
  public isLoggedIn = false;
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(value: any): Observable<any> {
   return this.http.post<Login>('/api/qwe', {value});
  }
}
