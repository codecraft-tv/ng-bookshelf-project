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

  private term: string = "";

  constructor(private router: Router,
              private route: ActivatedRoute,
              private googleBooksService: GoogleBooksService) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['term']) {
        this.term = params['term'];
        this.onSearch(this.term)
      }
    });
  }

  doSearch() {
    this.router.navigate(['search', {term: this.term}])
  }

  onSearch(term: string) {
    this.googleBooksService.searchBooks(term);
  }

  ngOnInit() {
  }

}
