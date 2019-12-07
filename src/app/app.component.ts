import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyBook';
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

removeBook(B: Book) {
      const index = this.StoredBooks.indexOf(B);
      console.log('index', index);
      this.StoredBooks.splice(index, 1);

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

