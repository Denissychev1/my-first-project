import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Question} from '../../models/questions';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AnswersService} from '../../services/answers/answers.service';
import {Answers} from '../../models/answers';
import {AnswereditComponent} from '../answeredit/answeredit.component';
import {AddquestionComponent} from '../addquestion/addquestion.component';

@Component({
  selector: 'app-imitationedit',
  templateUrl: './imitationedit.component.html',
  styleUrls: ['./imitationedit.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ImitationeditComponent implements OnInit {
  description: any;
  dataSource = new MatTableDataSource<Question>(this.description);
  selection = new SelectionModel<Question>(false, []);
  displayedColumns: string[] = ['id', 'name', 'imitationId'];
  selected = 0;
  answers: Answers[];
  constructor(
    public dialogRef: MatDialogRef<ImitationeditComponent>,
    @Inject(MAT_DIALOG_DATA) data: any, private answerService: AnswersService, public dialog: MatDialog) { this.description = data; }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.answers);
  }
  ngOnInit() {console.log(this.description);
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
  checkboxLabel(row?: Question): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  selectRow(row) {
    this.selected = row.id;
    this.answerService.getAnswers(this.selected).subscribe(data => this.answers = data);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AnswereditComponent, {
        width: '700px',
        height: '700px',
        data: this.answers,
      }
    )
    ;
    dialogRef.afterClosed();
  }
  open(): void {
    const dialogRef = this.dialog.open(AddquestionComponent, {
        width: '700px',
        height: '700px',
        data: this.answers,
      }
      )
    ;
    dialogRef.afterClosed();
  }
}
