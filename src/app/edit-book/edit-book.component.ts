import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  BookData: any;
  toastr: NotifierService;
  id: any;
  bookId: any;
  bookName: any;
  constructor(notifierService: NotifierService, private dialogRef: MatDialogRef<EditBookComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.toastr = notifierService;
    this.BookData = data;
    this.bookId = this.BookData.id;
    this.bookName = this.BookData.name;
  }


  bookDetails = new FormGroup({
    Title: new FormControl(''),
    Author: new FormControl('')
  });

  ngOnInit() {
  }

  save(Data) {
    if (Data.Title === '' || Data.Author === '') {
      this.toastr.notify('error', 'Please enter book details correctly');
    } else {
      Data.Id = this.bookId;
      this.dialogRef.close(Data);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
