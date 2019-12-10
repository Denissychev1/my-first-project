import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Imitation} from '../../models/imitations';
import {ImitationsService} from '../../services/imitations/imitations.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {QuestionsService} from '../../services/questions/questions.service';
import {MatDialog} from '@angular/material/dialog';
import {ImitationeditComponent} from '../questions/questions.component';
import {Question} from '../../models/questions';
import {AddimitationComponent} from '../addimitation/addimitation.component';



@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})

export class TestsComponent implements OnInit {
  constructor(private router: Router, private Imitationservice: ImitationsService, private questionService: QuestionsService,
              public dialog: MatDialog) {
  }
  selectedId = 0;
  MouseIndex = -1;
  questions: Question[];
  imitations: Imitation[];
  dataSource = new MatTableDataSource<Imitation>(this.imitations);
  selection = new SelectionModel<Imitation>(true, []);
  displayedColumns: string[] = ['id', 'name', 'events'];

  ngOnInit() {
    this.Imitationservice.getImitations().subscribe(Imitations => this.imitations = Imitations);
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
    const dialogRef = this.dialog.open(AddimitationComponent, {
        width: '700px',
        height: '700px',
      }
    );
    dialogRef.afterClosed();
  }


  clicButton() {
    this.router.navigateByUrl('/admin');
  }

  edit() {
  }

  selectRow(row) {
    this.selectedId = row.id;
    this.questionService.getQuestions(this.selectedId).subscribe(data => this.questions = data);
    const dialogRef = this.dialog.open(ImitationeditComponent, {
        width: '700px',
        height: '700px',
        data: {questions: this.questions,
          id: this.selectedId}
      }
    );
    dialogRef.afterClosed();
  }
  deleteRow(event, imitation) {
    event.stopPropagation();
    this.Imitationservice.deleteImitation(imitation.id).subscribe();
  }
  onMouseOver(index) {
    this.MouseIndex = index;
  }
}

