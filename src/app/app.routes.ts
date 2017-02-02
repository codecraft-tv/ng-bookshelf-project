import {Routes} from "@angular/router";
import {SearchComponent} from "./search/search.component";
import {LibraryComponent} from "./library/library.component";
import {BookComponent} from "./book/book.component";

export const routes: Routes = [
  {path: '', redirectTo: 'library', pathMatch: 'full'},
  {path: 'library', pathMatch: 'full', component: LibraryComponent},
  {path: 'search', component: SearchComponent},
  {path: 'book/:bookId', component: BookComponent},
  // {path: '**', component: LibraryComponent}
];
