import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyBook';
  bookTitle;
  bookAuthor;
  bookISBN;
  bookDetails = new FormGroup({
    bookTitle: new FormControl(''),
    bookAuthor: new FormControl(''),
    bookISBN: new FormControl(''),
  });
  StoredBooks: Book[] = [
    {

      title: 'Book 1',
      author: 'Author 1',
      id: '3456'
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      id: '7890'
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      id: '1234'
    },
    {
      title: 'Book 4',
      author: 'Author 4',
      id: '5678'
    },
    {
      title: 'Book 5',
      author: 'Author 5',
      id: '4589'
    }
  ];

  getBooks(data) {
    this.bookTitle = data.bookTitle;
    this.bookAuthor = data.bookAuthor;
    this.bookISBN = data.bookISBN;
    const newBook = new Book(this.bookTitle, this.bookAuthor, this.bookISBN);
    this.addBook(newBook);
  }

  removeBook(B: Book) {
    const index = this.StoredBooks.indexOf(B);
    this.StoredBooks.splice(index, 1);

  }
  addBook(B: Book) {
    this.StoredBooks.push(B);
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

