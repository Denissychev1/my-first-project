import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickButton() {
    this.router.navigateByUrl('/user/lk');
  }
}
