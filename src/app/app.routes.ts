import {Routes} from "@angular/router";

import { SearchComponent } from './search/search.component'
import { LibraryComponent } from './library/library.component'
import { BookComponent } from './book/book.component'

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'book/:id', component: BookComponent },
  { path: '**', redirectTo: 'search' }
];
