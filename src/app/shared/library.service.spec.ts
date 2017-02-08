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

describe('LibraryService', () => {
  let libraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryService]
    });
    libraryService = TestBed.get(LibraryService);
  });


  it('can add a book to the library', () => {
    //TODO
  });

  it('can remove a book to the library', () => {
    //TODO
  });

  it('checks if a book is already in the library', () => {
    //TODO
  });

  it('can save and load the books', () => {
    //TODO
  });
});
