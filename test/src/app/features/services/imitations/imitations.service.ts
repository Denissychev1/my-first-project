import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Imitation} from '../../models/imitations';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImitationsService {
  private ImitationUrl = '/api/imitations';
  id: number;

  constructor(private http: HttpClient) {
  }

  getImitations(): Observable<Imitation[]> {
    return this.http.get<Imitation[]>(this.ImitationUrl);
  }

  addImitation(imitations: Imitation): Observable<Imitation> {
    console.log(imitations);
    return this.http.post<Imitation>(this.ImitationUrl, imitations);
  }

  deleteImitation(id: any) {
    const params = new HttpParams()
      .set('id', id);
    return this.http.delete(this.ImitationUrl, {params});
  }
}
