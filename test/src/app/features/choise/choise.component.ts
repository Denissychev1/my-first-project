import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-choise',
  templateUrl: './choise.component.html',
  styleUrls: ['./choise.component.scss']
})
export class ChoiseComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  clickbutton() {
    this.router.navigateByUrl('/admin')
  }

  clikButton() {
    this.router.navigateByUrl('/lk')
  }



}
