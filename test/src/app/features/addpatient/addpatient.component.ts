import { Component, OnInit } from '@angular/core';
import {PatientsComponent} from "../patients/patients.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddpatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reset() {
    this.router.navigateByUrl('/patients')
  }
}
