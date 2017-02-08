import {Routes} from "@angular/router";
import {LibraryComponent} from "./library/library.component";
import {SearchComponent} from "./search/search.component";
import {BookComponent} from "./book/book.component";

export const routes: Routes = [
  {path: '', redirectTo:'library', pathMatch:'full'},
  {path: 'library', component: LibraryComponent},
  {path: 'search', component: SearchComponent},
  {path: 'book/:bookId', component: BookComponent},
];
