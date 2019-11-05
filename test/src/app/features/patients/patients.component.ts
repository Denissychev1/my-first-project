import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {AddpatientComponent} from "../addpatient/addpatient.component";
interface Patients {
  name: string;
  secondname: string;
  age: number;
  number: number;
}

let Patients: Patients[] = [
  {
    name: 'Иван',
    secondname: 'Иванов',
    age: 17,
    number: 121313123432754
  },
  {
    name: 'Петр',
    secondname: 'Петров',
    age: 14,
    number: 36624199
  },
  {
    name: 'Василий',
    secondname: 'Васильев',
    age: 17,
    number: 1469754
  },
  {
    name: 'Денис',
    secondname: 'Сычев',
    age: 20,
    number: 12345
  }
];

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  declarations: [
    AppComponent,
    AddpatientComponent
  ];
  constructor(private router: Router) { }
  Patients = Patients;
  ngOnInit() {
  }

  clickButton() {
    this.router.navigateByUrl('/addpatient')
  }

  clicButton() {
    this.router.navigateByUrl('/admin')
  }
}
