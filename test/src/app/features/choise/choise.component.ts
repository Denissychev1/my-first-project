import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {PatientsService} from "../patients.service";
import {Chpatient} from "./chpatient";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AdminGuard} from "../admin/admin.guard";
import {AuthService} from "../auth.service";
import {error} from "util";
import {AdminComponent} from "../admin/admin.component";

@Component({
  selector: 'app-choise',
  templateUrl: './choise.component.html',
  styleUrls: ['./choise.component.scss']
})
export class ChoiseComponent implements OnInit {
  PatientForm: FormGroup;
  AdminForm: FormGroup;
  p = false;
  q = false;

  constructor(private router: Router, private patientsService: PatientsService, private fb: FormBuilder, private authenticationService: AuthService, private guard: AdminGuard) {
  }

  ngOnInit() {
    this.initForm();
    this.iinitForm()
  }

  initForm() {
    this.PatientForm = this.fb.group({
      id: [''],
      password: ['']
    });
  }
  iinitForm() {
    this.AdminForm = this.fb.group({
      id: [''],
      password: []
    });
  }


patient= new Chpatient();


  clickbutton(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.AdminForm.value);
    this.authenticationService.login(this.AdminForm.value);
    this.router.navigateByUrl('/admin');

  }

  clikButton() {
    this.authenticationService.login(this.PatientForm.value);
    console.log(this.PatientForm.value);
    this.router.navigateByUrl('/lk');

  }


}
