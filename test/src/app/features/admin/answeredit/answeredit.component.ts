import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AddanswerComponent} from '../addanswer/addanswer.component';

@Component({
  selector: 'app-answeredit',
  templateUrl: './answeredit.component.html',
  styleUrls: ['./answeredit.component.scss']
})
export class AnswereditComponent implements OnInit {
  qwe: any;
  id: any;
  displayedColumns: string[] = ['id', 'text', 'value'];

  constructor(public dialogRef: MatDialogRef<AnswereditComponent>,
              @Inject(MAT_DIALOG_DATA) data: any, public dialog: MatDialog) {
    this.qwe = data.answers;
    this.id = data.id;
  }

  ngOnInit() {
  }
onClick():
  void {
    const dialogRef = this.dialog.open(AddanswerComponent, {
        width: '700px',
        height: '700px',
        data: this.id,
      }
    );
    dialogRef.afterClosed();
}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
