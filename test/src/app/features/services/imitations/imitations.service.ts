import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Imitation} from '../../models/imitations';
import {HttpClient} from '@angular/common/http';
import {Pat} from '../../models/pat';

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
  addImitation(imitations: Imitation): Observable<Imitation> {
    console.log(imitations);
    return this.http.post<Imitation>(this.ImitationUrl, imitations);
  }
}
