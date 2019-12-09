import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Answers} from '../../models/answers';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private param: any;
  private AnswersUrl = '/api/answers';
  constructor(private http: HttpClient) {
  }
  getAnswers(id: number): Observable<Answers[]> {
    const params = new HttpParams()
      .set('id', String(id));
    this.param = params;
    return this.http.get<Answers[]>(this.AnswersUrl, {params});
  }
  addAnswers(answer: Answers): Observable<Answers> {
    console.log(answer);
    const params = this.param;
    return this.http.post<Answers>(this.AnswersUrl, answer, {params});
  }
  deleteAnswer(id: any) {
    const params = new HttpParams()
      .set('id', id);
    return this.http.delete(this.AnswersUrl, {params});
  }
}
