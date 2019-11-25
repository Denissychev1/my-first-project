import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  model: 1;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  clickButton() {
    this.router.navigateByUrl('/admin/addimitation');
  }

  clicButton() {
    this.router.navigateByUrl('/admin');
  }
}
