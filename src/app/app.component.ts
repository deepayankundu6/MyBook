import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditBookComponent } from './edit-book/edit-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  key = 'title';
  reverse = false;
  private readonly toastr: NotifierService;
  searchBook: string;
  title = 'MyBook';
  constructor(notifierService: NotifierService, private dialog: MatDialog) {
    this.toastr = notifierService;
  }

  bookTitle;
  bookAuthor;
  bookISBN;

  flag = false;
  bookDetails = new FormGroup({
    bookTitle: new FormControl(''),
    bookAuthor: new FormControl(''),
    bookISBN: new FormControl(''),
  });
  StoredBooks: Book[] = [
    {

      title: 'Book 2',
      author: 'Author 2',
      id: '3456'
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      id: '7890'
    },
    {
      title: 'Book 1',
      author: 'Author 1',
      id: '1234'
    },
    {
      title: 'Book 5',
      author: 'Author 5',
      id: '5678'
    },
    {
      title: 'Book 4',
      author: 'Author 4',
      id: '4589'
    }
  ];
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    }

    this.dialog.open(EditBookComponent, dialogConfig);
  }
  getBooks(data) {
    this.bookTitle = data.bookTitle;
    this.bookAuthor = data.bookAuthor;
    this.bookISBN = data.bookISBN;
    const newBook = new Book(this.bookTitle, this.bookAuthor, this.bookISBN);
    this.StoredBooks.forEach(book => {
      if (book.title === newBook.title || book.id === newBook.id) {
        this.toastr.notify('error', 'The book already exists');
        this.flag = true;
      }
    });
    if (!this.flag) {
      this.addBook(newBook);
      this.flag = false;
    }
  }

  removeBook(B: Book) {
    const index = this.StoredBooks.indexOf(B);
    this.StoredBooks.splice(index, 1);
    this.toastr.notify('success', 'Book removed successfully');

  }
  addBook(B: Book) {
    if (B.title !== '' && B.author !== '' && B.id !== '') {
      this.StoredBooks.push(B);
      this.toastr.notify('success', 'Book added successfully');
    } else {
      this.toastr.notify('error', 'Please enter book details correctly');
    }
  }

}
class Book {
  title: any;
  author: any;
  id: any;
  constructor(title: any, author: any, id: any) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

