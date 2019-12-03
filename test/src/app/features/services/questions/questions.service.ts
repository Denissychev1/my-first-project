import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Question} from '../../models/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private QuestionUrl = '/api/questions';

  constructor(private http: HttpClient) {
  }

  getQuestions(id: number): Observable<Question[]> {
    const params = new HttpParams()
      .set('id', String(id));
    return this.http.get<Question[]>(this.QuestionUrl, {params});
  }
}
