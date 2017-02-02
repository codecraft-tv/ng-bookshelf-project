import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Book} from "../shared/book";
import {ActivatedRoute, Router} from "@angular/router";
import {GoogleBooksService} from "../shared/google-books.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: Book[];


  ngOnInit() {
  }

}
