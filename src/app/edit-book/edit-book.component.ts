import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditBookComponent>) { }

  ngOnInit() {
  }



  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
