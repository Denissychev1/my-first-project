import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patients} from '../../../server/db/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patientsUrl = '/api/patients';

  constructor(private http: HttpClient) {
  }

  getPatients(): Observable<Patients[]> {
    return this.http.get<Patients[]>(this.patientsUrl);
  }


  addPatients(patients: Patients): Observable<Patients> {
    console.log(patients);
    return this.http.post<Patients>(this.patientsUrl, patients);
  }

  deletePatients(patient: Patients | number): Observable<Patients> {
    const id = typeof patient === 'number' ? patient : patient.id;
    const url = `${this.patientsUrl}/${id}`;

    return this.http.delete<Patients>(url);
  }


}
