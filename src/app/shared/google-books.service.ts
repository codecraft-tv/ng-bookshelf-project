import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';

/*
 {
 "kind": "books#volume",
 "id": "H6syBwAAQBAJ",
 "etag": "L7UN2Dnkibg",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/H6syBwAAQBAJ",
 "volumeInfo": {
 "title": "Here",
 "authors": [
 "Richard McGuire"
 ],
 "publisher": "Penguin UK",
 "publishedDate": "2015-01-29",
 "description": "This is Richard McGuire's unique interactive ebook version of his groundbreaking graphic novel Here. Richard McGuire's groundbreaking comic strip Here was published under Art Spiegelman's editorship at RAW in 1989. Built in six pages of interlocking panels, dated by year, it collapsed time and space to tell the story of the corner of a room - and its inhabitants - between the years 500,957,406,073 BC and 2033 AD. The strip remains one of the most influential and widely discussed contributions to the medium, and it has now been developed, expanded and reimagined by the artist into this full-length, full-colour graphic novel - a must for any fan of the genre. 'From now on, McGuire will be known as the author of the novel Here, because it's a work of literature and art unlike any seen or read before. A book like this comes along once a decade, if not a century' Chris Ware, Guardian 'Promises to leapfrog immediately to the front ranks of the graphic-novel genre' New York Times Richard McGuire is a regular contributor to the New Yorker magazine. He has written and illustrated both children's books and experimental comics. His work has appeared in The New York Times, McSweeney's, Le Monde and Libération. He has written and directed two omnibus feature films, designed and manufactured his own line of toys, and is also the founder and bass player of the band Liquid Liquid.",
 "industryIdentifiers": [
 {
 "type": "ISBN_13",
 "identifier": "9780241203729"
 },
 {
 "type": "ISBN_10",
 "identifier": "0241203724"
 }
 ],
 "readingModes": {
 "text": true,
 "image": true
 },
 "pageCount": 205,
 "printType": "BOOK",
 "categories": [
 "Comics & Graphic Novels"
 ],
 "maturityRating": "NOT_MATURE",
 "allowAnonLogging": false,
 "contentVersion": "1.2.2.0.preview.3",
 "imageLinks": {
 "smallThumbnail": "http://books.google.com/books/content?id=H6syBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
 "thumbnail": "http://books.google.com/books/content?id=H6syBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 },
 "language": "en",
 "previewLink": "http://books.google.co.uk/books?id=H6syBwAAQBAJ&printsec=frontcover&dq=here&hl=&cd=1&source=gbs_api",
 "infoLink": "http://books.google.co.uk/books?id=H6syBwAAQBAJ&dq=here&hl=&source=gbs_api",
 "canonicalVolumeLink": "http://books.google.co.uk/books/about/Here.html?hl=&id=H6syBwAAQBAJ"
 },
 "saleInfo": {
 "country": "GB",
 "saleability": "NOT_FOR_SALE",
 "isEbook": false
 },
 "accessInfo": {
 "country": "GB",
 "viewability": "PARTIAL",
 "embeddable": true,
 "publicDomain": false,
 "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
 "epub": {
 "isAvailable": true,
 "acsTokenLink": "http://books.google.co.uk/books/download/Here-sample-epub.acsm?id=H6syBwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
 },
 "pdf": {
 "isAvailable": true,
 "acsTokenLink": "http://books.google.co.uk/books/download/Here-sample-pdf.acsm?id=H6syBwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
 },
 "webReaderLink": "http://books.google.co.uk/books/reader?id=H6syBwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
 "accessViewStatus": "SAMPLE",
 "quoteSharingAllowed": false
 },
 "searchInfo": {
 "textSnippet": "This is Richard McGuire&#39;s unique interactive ebook version of his groundbreaking graphic novel Here. Richard McGuire&#39;s groundbreaking comic strip Here was published under Art Spiegelman&#39;s editorship at RAW in 1989."
 }
 },
 */


@Injectable()
export class GoogleBooksService {
  private API_PATH: string = 'https://www.googleapis.com/books/v1/volumes';
  public loading: boolean = false;
  public initialised: boolean = false;
  public totalItems: number = 0;
  public _page: number = 1;
  public pageSize: number = 10;
  public query: string = "";
  public books: Book[];


  constructor(private http: Http) {
  }

  get startIndex() {
    return this.page * this.pageSize;
  }

  get totalPages() {
    try {
      return Math.ceil(this.totalItems / this.pageSize);
    } catch(e) {
      console.error(e);
      return 0;
    }
  }

  get page(): number {
    return this._page;
  }

  set page(val: number) {
    if (val !== this.page) {
      this._page = val;
      this.searchBooks(this.query);
    }
  }


  public searchBooks(queryTitle: string) {
    this.query = queryTitle;
    this.loading = true;
    this.initialised = true;
    this.books = [];
    this.http.get(`${this.API_PATH}?q=${this.query}&maxResults=${this.pageSize}&startIndex=${this.startIndex}`)
      .map(res => res.json())
      .do(data => {
        this.totalItems = data.totalItems;
      })
      .map(data => {
        return data.items ? data.items : [];
      })
      .map(items => {
        return items.map(item => this.bookFactory(item))
      })
      .do(books => console.log(books))
      .do(_ => this.loading = false)
      .subscribe((books) => this.books = books)
  }

  retrieveBook(bookId: string) {
    return this.http.get(`${this.API_PATH}/${bookId}`)
      .map(res => res.json())
      .map(item => this.bookFactory(item))
  }

  private bookFactory(item: any): Book {
    return new Book(
      item.id,
      item.volumeInfo.title,
      item.volumeInfo.subtitle,
      item.volumeInfo.authors,
      item.volumeInfo.publisher,
      item.volumeInfo.publishedDate,
      item.volumeInfo.description,
      item.volumeInfo.categories ? item.volumeInfo.categories.map( (item) => item.split("/").pop() ) : ['N/A'],
      item.volumeInfo.imageLinks.thumbnail,
      item.volumeInfo.imageLinks.smallThumbnail
    )
  }
}
