import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PatientsService} from "../patients.service";
import {Chpatient} from "./chpatient";
import {FormGroup, FormBuilder} from "@angular/forms";
import {AdminGuard} from "../admin/admin.guard";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-choise',
  templateUrl: './choise.component.html',
  styleUrls: ['./choise.component.scss']
})
export class ChoiseComponent implements OnInit {
  PatientForm: any={};
  AdminForm: any={};
  p=false;
  q=false;

  constructor(private router: Router, private patientsService: PatientsService, private fb: FormBuilder, private authenticationService: AuthService) {
  }

  ngOnInit() {

  }


patient= new Chpatient();


  clickbutton() {
    this.q = true;
    this.authenticationService.login(this.AdminForm.firstname, this.AdminForm.password);
    this.router.navigateByUrl('/admin');
    return this.q


  }

  clikButton() {
    this.authenticationService.login(this.PatientForm.firstname, this.PatientForm.password);
    console.log(this.PatientForm.value,this.p);
    this.router.navigateByUrl('/lk');
    return this.p
  }


}
