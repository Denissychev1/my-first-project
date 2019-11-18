import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(firstname: any, password: any) {
    return this.http.post<any>('/api/authenticate', { username: firstname, password: password })
      .pipe(map(patient => {
        // login successful if there's a jwt token in the response
        if (patient && patient.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(patient));
        }

        return patient;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
