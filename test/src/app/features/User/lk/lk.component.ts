import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.scss']
})
export class LkComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  clickButton() {
    this.router.navigateByUrl('/user/progress');
  }

  clikButton() {
    this.router.navigateByUrl('/user/imitations');
  }

  clickbutton() {
    this.router.navigateByUrl('/user/help');
  }
}

