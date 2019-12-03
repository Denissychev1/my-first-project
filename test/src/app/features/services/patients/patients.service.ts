import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pat} from '../../models/pat';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patientsUrl = '/api/patients';

  constructor(private http: HttpClient) {
  }

  getPatients(): Observable<Pat[]> {
    return this.http.get<Pat[]>(this.patientsUrl);
  }


  addPatients(patients: Pat): Observable<Pat> {
    console.log(patients);
    return this.http.post<Pat>(this.patientsUrl, patients);
  }

  deletePatients(patient: Pat | number): Observable<Pat> {
    const id = typeof patient === 'number' ? patient : patient.id;
    const url = `${this.patientsUrl}/${id}`;

    return this.http.delete<Pat>(url);
  }


}
