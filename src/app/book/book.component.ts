import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {GoogleBooksService} from "../shared/google-books.service";
import {Book} from "../shared/book";
import {LibraryService} from "../shared/library.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  loading: boolean = false;
  book: any;

  constructor(private route: ActivatedRoute,
              private googleBooksService: GoogleBooksService,
              private libraryService: LibraryService) {
    this.route.params.subscribe(params => {
      // console.log(params);
      if (params['bookId']) {
        this.getBook(params['bookId'])
      }
    });
  }

  getBook(bookId: string) {
    this.loading = true;
    this.googleBooksService.retrieveBook(bookId)
      .do(_ => this.loading = false)
      .subscribe(book => this.book = book);
  }

  hasBook(book: Book): boolean {
    if (book) {
      return this.libraryService.hasBook(book)
    }
  }

  addBook(book: Book) {
    if (book) {
      return this.libraryService.addBook(book)
    }
  }

  removeBook(book: Book) {
    if (book) {
      if (this.libraryService.hasBook(book)) {
        this.libraryService.removeBook(book)
      } else {
        this.libraryService.addBook(book)
      }
    }
  }
}
