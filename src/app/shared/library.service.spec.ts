/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {LibraryService} from './library.service';
import {Book} from "./book";

function createBookFixture(book_id) {
  return new Book(
    book_id,
    "title",
    "subTitle:",
    ["authors"],
    "publisher",
    "publishDate",
    "description",
    ["categories"],
    "thumbnail",
    "smallThumbnail"
  )
}

fdescribe('LibraryService', () => {
  let libraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryService]
    });
    libraryService = TestBed.get(LibraryService);
  });


  it('Adding a book', () => {
    let book = createBookFixture("book_1");
    libraryService.addBook(book);
    expect(libraryService.books[0].id).toBe(book.id);
  });

  it('Removing a book', () => {
    let book = createBookFixture("book_1");
    libraryService.addBook(book);
    libraryService.removeBook(book);
    expect(libraryService.books.length).toBe(0);
  });

  it('Checking if book in list', () => {
    let book = createBookFixture("book_1");
    libraryService.addBook(book);
    expect(libraryService.hasBook(book)).toBe(true);
  });

  it('Saving and loading', () => {
    let book = createBookFixture("book_1");
    libraryService.addBook(book);
    libraryService.save();
    libraryService.books = [];
    libraryService.load();
    expect(libraryService.hasBook(book)).toBe(true);
  });
});
