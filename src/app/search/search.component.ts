import {Component, OnInit} from '@angular/core';
import {GoogleBooksService} from "../shared/google-books.service";
import {Book} from "../shared/book";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {
  }

  doSearch() {
    //TODO
  }

  onSearch(term: string) {
    //TODO
  }

  ngOnInit() {
  }

}
