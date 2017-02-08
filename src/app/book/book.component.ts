import {Component} from "@angular/core";
import {Book} from "../shared/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {


  constructor() {
  }

  getBook(bookId: string) {
    //TODO
  }

  hasBook(book: Book): boolean {
    //TODO
    return false;
  }

  addBook(book: Book) {
    //TODO
  }

  removeBook(book: Book) {
    //TODO
  }
}
