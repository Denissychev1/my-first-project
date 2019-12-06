import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-answeredit',
  templateUrl: './answeredit.component.html',
  styleUrls: ['./answeredit.component.scss']
})
export class AnswereditComponent implements OnInit {
  qwe: any;
  displayedColumns: string[] = ['id', 'text', 'value'];

  constructor(public dialogRef: MatDialogRef<AnswereditComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.qwe = data;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
