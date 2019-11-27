import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from '../../../app.component';
import {PatientsService} from '../../services/patients.service';
import {Pat} from '../../models/pat';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  providers: [PatientsService],
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  declarations: [
    AppComponent,
  ];

  constructor(private router: Router,
              private patientsService: PatientsService) {
  }

  patients: Pat[];

  ngOnInit() {
    this.patientsService.getPatients().subscribe(patients => this.patients = patients);
  }

  clickButton() {
    this.router.navigateByUrl('/admin/addpatient');
  }

  clicButton() {
    this.router.navigateByUrl('/admin');
  }
}
