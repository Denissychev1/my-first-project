import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addimitation',
  templateUrl: './addimitation.component.html',
  styleUrls: ['./addimitation.component.scss']
})
export class AddimitationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  reset() {
    this.router.navigateByUrl('/admin/tests');
  }
}
