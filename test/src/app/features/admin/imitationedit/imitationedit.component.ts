import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Question} from '../../models/questions';

@Component({
  selector: 'app-imitationedit',
  templateUrl: './imitationedit.component.html',
  styleUrls: ['./imitationedit.component.scss']
})
export class ImitationeditComponent implements OnInit {
  description: any;
  dataSource = new MatTableDataSource<Question>(this.description);
  selection = new SelectionModel<Question>(false, []);
  displayedColumns: string[] = ['select', 'id', 'name'];

  constructor(
    public dialogRef: MatDialogRef<ImitationeditComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) { this.description = data; }

  onNoClick(): void {
    this.dialogRef.close();
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

}
