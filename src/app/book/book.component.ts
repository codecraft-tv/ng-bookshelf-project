import {Component} from "@angular/core";
import {Book} from "../shared/book";
import {Router, ActivatedRoute} from "@angular/router";
import {GoogleBooksService} from "../shared/google-books.service";
import {LibraryService} from "../shared/library.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  private book: Book;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private googleBooksService: GoogleBooksService,
              private libraryService: LibraryService) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['bookId']) {
        this.getBook(params['bookId'])
      }
    });
  }

  getBook(bookId: string) {
    this.googleBooksService.retrieveBook(bookId)
      .do(value => console.log(value))
      .subscribe(value => this.book = value);
  }

  hasBook(book: Book): boolean {
    if (book) {
      return this.libraryService.hasBook(book);
    }
  }

  addBook(book: Book) {
    if (book) {
      return this.libraryService.addBook(book);
    }
  }

  removeBook(book: Book) {
    if (book) {
      return this.libraryService.removeBook(book);
    }
  }
}
