import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  BookData: any;
  title: any;
  name: any;
  constructor(private dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.BookData = data;
    this.title = this.BookData.id;
    this.name = this.BookData.name;
    console.log(this.BookData);
  }

  ngOnInit() {
  }



  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
