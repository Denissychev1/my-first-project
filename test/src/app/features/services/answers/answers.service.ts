import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Answers} from '../../models/answers';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private AnswersUrl = '/api/answers';
  constructor(private http: HttpClient) {
  }
  getAnswers(id: number): Observable<Answers[]> {
    const params = new HttpParams()
      .set('id', String(id));
    return this.http.get<Answers[]>(this.AnswersUrl, {params});
  }
}
