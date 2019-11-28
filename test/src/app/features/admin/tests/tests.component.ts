import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Imitation} from '../../models/imitations';
import {ImitationsService} from '../../services/imitations.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  constructor(private router: Router, private Imitationservice: ImitationsService) {
  }
  imitations: Imitation[];
  dataSource = new MatTableDataSource<Imitation>(this.imitations);
  selection = new SelectionModel<Imitation>(false, []);
  displayedColumns: string[] = ['select', 'id', 'name'];
  ngOnInit() {    this.Imitationservice.getImitations().subscribe(Imitations => this.imitations = Imitations);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Imitation): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
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
