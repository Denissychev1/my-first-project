import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-choise',
  templateUrl: './choise.component.html',
  styleUrls: ['./choise.component.scss']
})
export class ChoiseComponent implements OnInit {
  constructor(private router: Router,  private fb: FormBuilder, private authenticationService: AuthService) {
  }
  PatientForm: FormGroup;


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.PatientForm = this.fb.group({
      id: [''],
      password: ['']
    });
  }
  clikButton() {
    this.authenticationService.login(this.PatientForm.value).subscribe(data => {
      this.router.navigate(['/user/lk']);
    });
    this.authenticationService.isLoggedIn = true;
     }
}
