import {Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {PatientsService} from '../patients.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AdminGuard} from '../admin/admin.guard';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-choise',
  templateUrl: './choise.component.html',
  styleUrls: ['./choise.component.scss']
})
export class ChoiseComponent implements OnInit {
  constructor(private router: Router, private patientsService: PatientsService, private fb: FormBuilder, private authenticationService: AuthService, private guard: AdminGuard) {
  }
  PatientForm: FormGroup;
  AdminForm: FormGroup;


  ngOnInit() {
    this.initForm();
    this.iinitForm();
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


  clickbutton() {
    console.log(this.AdminForm.value);
    this.authenticationService.login(this.AdminForm.value);
    this.router.navigateByUrl('/admin');

  }

  clikButton() {
    this.authenticationService.login(this.PatientForm.value).subscribe(data => {
      this.router.navigate(['/lk']);
    });
    this.authenticationService.isLoggedIn = true;
     }
}
