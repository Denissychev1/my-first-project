import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Imitation} from '../../models/imitations';
import {ImitationsService} from '../../services/imitations.service';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  model: 1;
  constructor(private router: Router, private Imitationservice: ImitationsService) {
  }
  imitations: Imitation[];
  displayedColumns: ['name', 'id'];
  ngOnInit() {    this.Imitationservice.getImitations().subscribe(Imitations => this.imitations = Imitations);
  }

  clickButton() {
    this.router.navigateByUrl('/admin/addimitation');
  }

  clicButton() {
    this.router.navigateByUrl('/admin');
  }
  edit() {
    this.router.navigateByUrl('/admin/edit');
  }
  send() {
    console.log();
    this.Imitationservice.sendImitations(this.imitations.values).subscribe(data => alert(data));
  }
}
