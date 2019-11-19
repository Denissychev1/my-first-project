import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import{PatientsService} from "../patients.service";
import {Pat} from "../models/pat";


@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  providers: [PatientsService],
  styleUrls: ['./addpatient.component.scss']
})
export class AddpatientComponent implements OnInit {
  PatientsForm: FormGroup;

  patients = new Pat();

  constructor(private router: Router, private fb: FormBuilder, private patientsService: PatientsService) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.PatientsForm = this.fb.group({
      id: [''],
      firstname: ['', [
        Validators.required,
        Validators.pattern(/[A-z]/)
      ]
      ],
      lastname: ['', [
        Validators.required,
        Validators.pattern(/[A-z]/)
      ]
      ],
      age: ['', [
        Validators.required,
        Validators.pattern(/[0-9]/)
      ]],
      telephone: ['', [
        Validators.required,
        Validators.pattern(/[0-9]/)
      ]],
      password: ['']
    });
  }

  /** Обозначаем действие onsubmit reset*/
  reset() {
    this.router.navigateByUrl('/patients')
  };

  onsubmit() {
    const controls = this.PatientsForm.controls;

    /** Проверяем форму  */
    if (this.PatientsForm.invalid) {
      /** Если форма не валидна, то помечаем все как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /** Прерываем выполнение метода*/
      return;
    }
    /** Обработка данных формы */
    console.log(this.PatientsForm.value);
    this.patientsService.addPatients(this.PatientsForm.value)
      .subscribe();

  };

}





