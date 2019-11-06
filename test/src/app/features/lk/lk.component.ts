import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";
import {HelpComponent} from "../help/help.component";
import {TestsComponent} from "../tests/tests.component";
import {Router} from "@angular/router";
import {ImitationsComponent} from "../imitations/imitations.component";

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.scss']
})
export class LkComponent implements OnInit {
  declarations: [
    AppComponent,
    LkComponent,
    HelpComponent,
    TestsComponent,
    ImitationsComponent
  ];


  constructor(private router: Router) {
  }

  ngOnInit() {

  }
  clickButton() {
    this.router.navigateByUrl('/progress')
  }

  clikButton() {
    this.router.navigateByUrl('/imitations')
  }

  clickbutton() {
    this.router.navigateByUrl('/help')
  }
}

