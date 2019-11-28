import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Imitation} from '../models/imitations';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImitationsService {
  private ImitationUrl = '/api/imitations' ;

  constructor(private http: HttpClient) {
  }

  getImitations(): Observable<Imitation[]> {
    return this.http.get<Imitation[]>(this.ImitationUrl);
  }
  sendImitations(id: any) {
    return this.http.post('/api/questions', {id});
  }
}
